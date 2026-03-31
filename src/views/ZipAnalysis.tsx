
import React, { useState, useMemo, useRef } from 'react';
import { 
  Upload, FileArchive, TrendingUp, Users, Package, ShieldCheck, 
  AlertTriangle, Download, Printer, ChevronRight, 
  PieChart as PieChartIcon, ArrowUpRight, ArrowDownRight, 
  Search, Filter, Info, CheckCircle2, XCircle, FileText,
  Truck, DollarSign, Activity, Layers, 
  RefreshCcw, Eye, EyeOff, LayoutDashboard, AlertCircle,
  List, MapPin, CreditCard, ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, 
  AreaChart, Area, Legend
} from 'recharts';
import { processZipFile, NfeData, NfeProduct } from '../utils/zipParser';

type ViewMode = 'gerencial' | 'fiscal' | 'financeiro' | 'logistica' | 'alerts' | 'list';

interface Alert {
  type: 'warning' | 'error' | 'info';
  title: string;
  description: string;
  category: 'fiscal' | 'gerencial' | 'estoque';
}

export default function ZipAnalysis() {
  const [nfeList, setNfeList] = useState<NfeData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('gerencial');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.zip')) {
      setError('Por favor, envie um arquivo ZIP válido.');
      return;
    }

    setIsProcessing(true);
    setError(null);
    try {
      const data = await processZipFile(file);
      if (data.length === 0) {
        setError('Nenhuma NF-e válida encontrada no arquivo ZIP.');
      } else {
        setNfeList(data);
      }
    } catch (err) {
      console.error(err);
      setError('Erro ao processar o arquivo ZIP.');
    } finally {
      setIsProcessing(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  // --- Data Processing & Analytics ---

  const stats = useMemo(() => {
    if (nfeList.length === 0) return null;

    const sales = nfeList.filter(n => n.type === 'saída');
    const purchases = nfeList.filter(n => n.type === 'entrada');

    const totalSales = sales.reduce((acc, n) => acc + n.totals.totalValue, 0);
    const totalPurchases = purchases.reduce((acc, n) => acc + n.totals.totalValue, 0);
    const ticketMedio = sales.length > 0 ? totalSales / sales.length : 0;

    // --- Financial Analysis (Payment Methods) ---
    const paymentStats: Record<string, number> = {};
    sales.forEach(n => {
      n.paymentMethods.forEach(p => {
        paymentStats[p.type] = (paymentStats[p.type] || 0) + p.value;
      });
    });
    const paymentChartData = Object.entries(paymentStats)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

    // --- Time Series Analysis ---
    const salesByDate: Record<string, number> = {};
    const salesByMonth: Record<string, number> = {};
    sales.forEach(n => {
      const date = n.emissionDate.split('T')[0];
      const month = date.substring(0, 7); // YYYY-MM
      salesByDate[date] = (salesByDate[date] || 0) + n.totals.totalValue;
      salesByMonth[month] = (salesByMonth[month] || 0) + n.totals.totalValue;
    });

    const salesChartData = Object.entries(salesByDate)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, value]) => ({ date, value }));

    const monthlyChartData = Object.entries(salesByMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, value]) => ({ month, value }));

    // Trend calculation
    let salesTrend = null;
    let salesTrendUp = true;
    if (monthlyChartData.length >= 2) {
      const lastMonth = monthlyChartData[monthlyChartData.length - 1].value;
      const prevMonth = monthlyChartData[monthlyChartData.length - 2].value;
      if (prevMonth > 0) {
        const diff = ((lastMonth - prevMonth) / prevMonth) * 100;
        salesTrend = `${diff > 0 ? '+' : ''}${diff.toFixed(1)}%`;
        salesTrendUp = diff >= 0;
      }
    }

    // --- Product Analysis ---
    const productSales: Record<string, { description: string, value: number, qty: number, frequency: number, ncm: string }> = {};
    sales.forEach(n => {
      n.products.forEach(p => {
        if (!productSales[p.code]) {
          productSales[p.code] = { description: p.description, value: 0, qty: 0, frequency: 0, ncm: p.ncm };
        }
        productSales[p.code].value += p.totalValue;
        productSales[p.code].qty += p.quantity;
        productSales[p.code].frequency += 1;
      });
    });

    const productPurchases: Record<string, { description: string, value: number, qty: number, frequency: number, ncm: string, avgPrice: number }> = {};
    purchases.forEach(n => {
      n.products.forEach(p => {
        if (!productPurchases[p.code]) {
          productPurchases[p.code] = { description: p.description, value: 0, qty: 0, frequency: 0, ncm: p.ncm, avgPrice: 0 };
        }
        productPurchases[p.code].value += p.totalValue;
        productPurchases[p.code].qty += p.quantity;
        productPurchases[p.code].frequency += 1;
      });
    });

    // Calculate avg purchase price
    Object.keys(productPurchases).forEach(code => {
      if (productPurchases[code].qty > 0) {
        productPurchases[code].avgPrice = productPurchases[code].value / productPurchases[code].qty;
      }
    });

    const topProducts = Object.entries(productSales)
      .map(([code, data]) => ({ code, ...data }))
      .sort((a, b) => b.value - a.value);

    // Profitability & Margin
    const productProfitability = Object.entries(productSales).map(([code, saleData]) => {
      const purchaseData = productPurchases[code];
      const avgSalePrice = saleData.qty > 0 ? saleData.value / saleData.qty : 0;
      const avgCost = purchaseData?.avgPrice || 0;
      const margin = avgCost > 0 ? ((avgSalePrice - avgCost) / avgCost) * 100 : 0;
      const totalProfit = (avgSalePrice - avgCost) * saleData.qty;
      
      return {
        code,
        description: saleData.description,
        avgSalePrice,
        avgCost,
        margin,
        totalProfit,
        qty: saleData.qty
      };
    }).sort((a, b) => b.totalProfit - a.totalProfit);

    // ABC Curve
    const totalProductValue = topProducts.reduce((acc, p) => acc + p.value, 0);
    let cumulativeValue = 0;
    const abcData = topProducts.map(p => {
      cumulativeValue += p.value;
      const percentage = (cumulativeValue / totalProductValue) * 100;
      let category = 'C';
      if (percentage <= 80) category = 'A';
      else if (percentage <= 95) category = 'B';
      return { ...p, category };
    });

    // --- Client Analysis ---
    const clientSales: Record<string, { name: string, value: number, count: number, lastDate: string, uf: string, city: string }> = {};
    sales.forEach(n => {
      const key = n.recipient.cnpjCpf;
      const date = n.emissionDate.split('T')[0];
      if (!clientSales[key]) {
        clientSales[key] = { name: n.recipient.name, value: 0, count: 0, lastDate: date, uf: n.recipient.uf, city: n.recipient.city };
      }
      clientSales[key].value += n.totals.totalValue;
      clientSales[key].count += 1;
      if (date > clientSales[key].lastDate) clientSales[key].lastDate = date;
    });

    const topClients = Object.entries(clientSales)
      .map(([id, data]) => ({ id, ...data }))
      .sort((a, b) => b.value - a.value);

    // Concentration
    const top3Value = topClients.slice(0, 3).reduce((acc, c) => acc + c.value, 0);
    const concentration = totalSales > 0 ? (top3Value / totalSales) * 100 : 0;

    // Churned Clients (No sales in last 30 days of the dataset)
    const maxDate = new Date(Math.max(...nfeList.map(n => new Date(n.emissionDate).getTime())));
    const churnThreshold = new Date(maxDate.getTime() - 30 * 24 * 60 * 60 * 1000);
    const churnedClients = topClients.filter(c => new Date(c.lastDate) < churnThreshold);

    // --- Supplier Analysis ---
    const supplierPurchases: Record<string, { name: string, value: number, count: number, uf: string, city: string }> = {};
    purchases.forEach(n => {
      const key = n.issuer.cnpj;
      if (!supplierPurchases[key]) {
        supplierPurchases[key] = { name: n.issuer.name, value: 0, count: 0, uf: n.issuer.uf, city: n.issuer.city };
      }
      supplierPurchases[key].value += n.totals.totalValue;
      supplierPurchases[key].count += 1;
    });
    const topSuppliers = Object.entries(supplierPurchases)
      .map(([id, data]) => ({ id, ...data }))
      .sort((a, b) => b.value - a.value);

    // --- Price Variation Analysis ---
    const productPurchasePrices: Record<string, { prices: number[], supplier: string }> = {};
    purchases.forEach(n => {
      n.products.forEach(p => {
        if (!productPurchasePrices[p.code]) productPurchasePrices[p.code] = { prices: [], supplier: n.issuer.name };
        productPurchasePrices[p.code].prices.push(p.unitValue);
      });
    });

    const priceVariations = Object.entries(productPurchasePrices)
      .map(([code, data]) => {
        const min = Math.min(...data.prices);
        const max = Math.max(...data.prices);
        const variation = min > 0 ? ((max - min) / min) * 100 : 0;
        return { code, variation, supplier: data.supplier };
      })
      .filter(v => v.variation > 5) // More than 5% variation
      .sort((a, b) => b.variation - a.variation);

    // --- Fiscal Analysis ---
    const cfopTotals: Record<string, number> = {};
    const cstTotals: Record<string, number> = {};
    const ufTotals: Record<string, number> = {};
    const ncmTotals: Record<string, number> = {};
    
    nfeList.forEach(n => {
      const uf = n.type === 'saída' ? n.recipient.uf : n.issuer.uf;
      ufTotals[uf] = (ufTotals[uf] || 0) + n.totals.totalValue;

      n.products.forEach(p => {
        cfopTotals[p.cfop] = (cfopTotals[p.cfop] || 0) + p.totalValue;
        const cst = p.cst || p.csosn || 'N/A';
        cstTotals[cst] = (cstTotals[cst] || 0) + p.totalValue;
        ncmTotals[p.ncm] = (ncmTotals[p.ncm] || 0) + p.totalValue;
      });
    });

    const cfopChartData = Object.entries(cfopTotals).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
    const ufChartData = Object.entries(ufTotals).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
    const ncmChartData = Object.entries(ncmTotals).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 10);

    const taxes = nfeList.reduce((acc, n) => ({
      icms: acc.icms + n.totals.icmsValue,
      st: acc.st + n.totals.icmsSt,
      ipi: acc.ipi + n.totals.ipi,
      pis: acc.pis + n.totals.pis,
      cofins: acc.cofins + n.totals.cofins,
      fcp: acc.fcp + n.totals.fcp,
      issqn: acc.issqn + (n.totals.issqn || 0),
      freight: acc.freight + n.totals.freight,
      insurance: acc.insurance + n.totals.insurance,
      discount: acc.discount + n.totals.discount,
      others: acc.others + n.totals.others,
    }), { icms: 0, st: 0, ipi: 0, pis: 0, cofins: 0, fcp: 0, issqn: 0, freight: 0, insurance: 0, discount: 0, others: 0 });

    const totalTaxesValue = taxes.icms + taxes.st + taxes.ipi + taxes.pis + taxes.cofins + taxes.fcp + taxes.issqn;

    // --- Alerts ---
    const alerts: Alert[] = [];
    
    // NCM Divergence
    const productNcmMap: Record<string, Set<string>> = {};
    nfeList.forEach(n => {
      n.products.forEach(p => {
        if (!productNcmMap[p.code]) productNcmMap[p.code] = new Set();
        productNcmMap[p.code].add(p.ncm);
      });
    });
    Object.entries(productNcmMap).forEach(([code, ncms]) => {
      if (ncms.size > 1) {
        alerts.push({
          type: 'error',
          category: 'fiscal',
          title: 'NCM Divergente',
          description: `O produto ${code} possui múltiplos NCMs: ${Array.from(ncms).join(', ')}`
        });
      }
    });

    // Sales below cost
    productProfitability.forEach(p => {
      if (p.avgCost > 0 && p.avgSalePrice < p.avgCost) {
        alerts.push({
          type: 'error',
          category: 'gerencial',
          title: 'Venda Abaixo do Custo',
          description: `O produto ${p.description} está sendo vendido com prejuízo. Venda: R$ ${p.avgSalePrice.toFixed(2)} | Custo: R$ ${p.avgCost.toFixed(2)}`
        });
      }
    });

    // Missing CEST for ST
    const missingCest = nfeList.flatMap(n => n.products).filter(p => !p.cest && (p.cfop.startsWith('54') || p.cfop.startsWith('64')));
    if (missingCest.length > 0) {
      alerts.push({
        type: 'error',
        category: 'fiscal',
        title: 'CEST Ausente em Operação ST',
        description: `${new Set(missingCest.map(p => p.code)).size} produtos em operações de ST estão sem o código CEST.`
      });
    }

    // Revenue Concentration
    if (concentration > 50) {
      alerts.push({
        type: 'warning',
        category: 'gerencial',
        title: 'Alta Concentração de Receita',
        description: `Os 3 maiores clientes representam ${concentration.toFixed(1)}% do seu faturamento. Risco comercial detectado.`
      });
    }

    // Churned Clients
    if (churnedClients.length > 0) {
      alerts.push({
        type: 'info',
        category: 'gerencial',
        title: 'Clientes Inativos',
        description: `${churnedClients.length} clientes não compram há mais de 30 dias.`
      });
    }

    // Price Variation
    priceVariations.slice(0, 5).forEach(v => {
      if (v.variation > 15) {
        alerts.push({
          type: 'warning',
          category: 'gerencial',
          title: 'Aumento de Preço de Compra',
          description: `O produto ${v.code} teve um aumento de ${v.variation.toFixed(1)}% no fornecedor ${v.supplier}.`
        });
      }
    });

    // Stock without sales
    const purchasedNotSold = Object.keys(productPurchases).filter(code => !productSales[code]);
    if (purchasedNotSold.length > 0) {
      alerts.push({
        type: 'info',
        category: 'estoque',
        title: 'Produtos Sem Giro',
        description: `${purchasedNotSold.length} produtos foram comprados mas não tiveram nenhuma venda registrada no período.`
      });
    }

    return {
      totalSales,
      totalPurchases,
      ticketMedio,
      salesCount: sales.length,
      purchasesCount: purchases.length,
      salesChartData,
      monthlyChartData,
      topProducts,
      abcData,
      topClients,
      topSuppliers,
      cfopChartData,
      ufChartData,
      ncmChartData,
      cstTotals,
      taxes,
      totalTaxesValue,
      paymentChartData,
      alerts,
      salesTrend,
      salesTrendUp,
      concentration,
      churnedClientsCount: churnedClients.length,
      priceVariations,
      productProfitability,
      purchasedNotSold
    };
  }, [nfeList]);

  const handlePrint = () => {
    window.print();
  };

  const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#10b981', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef'];

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20">
            <FileArchive className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Análise de Lote (ZIP)</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Processamento inteligente de múltiplos XMLs de NF-e</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {nfeList.length > 0 && (
            <>
              <button 
                onClick={() => { setNfeList([]); setViewMode('gerencial'); }}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-200 transition-all"
              >
                Limpar Dados
              </button>
              <button 
                onClick={() => window.print()}
                className="p-2 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 transition-colors"
                title="Imprimir Relatório"
              >
                <Printer className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Upload Area */}
      {nfeList.length === 0 && (
        <div 
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`relative border-2 border-dashed rounded-2xl p-16 text-center transition-all ${
            isDragging 
              ? 'border-red-600 bg-red-50 dark:bg-red-950/20' 
              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
          }`}
        >
          <input 
            type="file" 
            accept=".zip" 
            ref={fileInputRef}
            onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="space-y-6">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto">
              {isProcessing ? (
                <RefreshCcw className="w-10 h-10 text-red-600 dark:text-red-400 animate-spin" />
              ) : (
                <Upload className="w-10 h-10 text-red-600 dark:text-red-400" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {isProcessing ? 'Processando XMLs...' : 'Arraste seu arquivo ZIP aqui'}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto">
                {isProcessing 
                  ? 'Estamos extraindo e analisando os dados das suas notas fiscais. Isso pode levar alguns segundos dependendo do volume.'
                  : 'O sistema irá extrair automaticamente todos os XMLs de NF-e, remover duplicatas e gerar os dashboards gerenciais e fiscais.'
                }
              </p>
            </div>
            {!isProcessing && (
              <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-red-700 transition-all">
                Selecionar Arquivo
              </button>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 p-4 rounded-xl flex items-center gap-3 text-red-700 dark:text-red-400">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {nfeList.length > 0 && stats && (
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 w-fit print:hidden">
            {[
              { id: 'gerencial', label: 'Visão Gerencial', icon: LayoutDashboard },
              { id: 'fiscal', label: 'Visão Fiscal', icon: FileText },
              { id: 'financeiro', label: 'Financeiro', icon: CreditCard },
              { id: 'logistica', label: 'Logística', icon: Truck },
              { id: 'alerts', label: 'Alertas', icon: AlertCircle, count: stats.alerts.length },
              { id: 'list', label: 'Lista de Notas', icon: List },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === tab.id 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.count !== undefined && tab.count > 0 && (
                  <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${
                    viewMode === tab.id ? 'bg-white/20 text-white' : 'bg-red-100 text-red-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {viewMode === 'gerencial' && (
                <div className="space-y-8">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard 
                      label="Faturamento Total" 
                      value={`R$ ${stats.totalSales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<DollarSign className="w-5 h-5 text-emerald-500" />}
                      trend={stats.salesTrend || undefined}
                      trendUp={stats.salesTrendUp}
                    />
                    <StatCard 
                      label="Ticket Médio" 
                      value={`R$ ${stats.ticketMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<Activity className="w-5 h-5 text-amber-500" />}
                    />
                    <StatCard 
                      label="Concentração (Top 3)" 
                      value={`${stats.concentration.toFixed(1)}%`}
                      icon={<Users className="w-5 h-5 text-blue-500" />}
                      subValue="Dependência de clientes"
                    />
                    <StatCard 
                      label="Clientes Inativos" 
                      value={stats.churnedClientsCount.toString()}
                      icon={<EyeOff className="w-5 h-5 text-red-500" />}
                      subValue="Sem compra > 30 dias"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                      {/* Faturamento Evolution */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-red-600" />
                            Evolução Mensal do Faturamento
                          </h3>
                        </div>
                        <div className="h-[300px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.monthlyChartData}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis dataKey="month" fontSize={10} tickMargin={10} axisLine={false} tickLine={false} />
                              <YAxis fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `R$ ${v/1000}k`} />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                formatter={(v: number) => [`R$ ${v.toLocaleString('pt-BR')}`, 'Faturamento']}
                              />
                              <Bar dataKey="value" fill="#ef4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Top Products Table */}
                      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Package className="w-5 h-5 text-red-600" />
                            Ranking de Produtos (Curva ABC)
                          </h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Produto</th>
                                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Qtd</th>
                                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Frequência</th>
                                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Faturamento</th>
                                <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-center">Curva</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                              {stats.abcData.slice(0, 10).map((p, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                  <td className="px-6 py-4">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{p.description}</p>
                                    <p className="text-[10px] text-slate-400 font-mono">{p.code}</p>
                                  </td>
                                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 text-right font-mono">{p.qty}</td>
                                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 text-right font-mono">{p.frequency}x</td>
                                  <td className="px-6 py-4 text-sm font-bold text-emerald-600 dark:text-emerald-400 text-right font-mono">
                                    R$ {p.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                                      p.category === 'A' ? 'bg-red-100 text-red-700' : 
                                      p.category === 'B' ? 'bg-amber-100 text-amber-700' : 
                                      'bg-slate-100 text-slate-700'
                                    }`}>
                                      {p.category}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Top Clients */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                          <Users className="w-5 h-5 text-red-600" />
                          Top Clientes
                        </h3>
                        <div className="space-y-4">
                          {stats.topClients.slice(0, 5).map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between group">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500">
                                  {idx + 1}
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</p>
                                  <div className="flex items-center gap-2">
                                    <p className="text-[10px] text-slate-400 font-mono">{item.id}</p>
                                    <span className="text-[10px] text-slate-400">•</span>
                                    <p className="text-[10px] text-slate-400 font-bold">{item.count}x</p>
                                  </div>
                                </div>
                              </div>
                              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                                R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Variation */}
                      {stats.priceVariations.length > 0 && (
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                            <TrendingUp className="w-5 h-5 text-amber-500" />
                            Variação de Preço (Compra)
                          </h3>
                          <div className="space-y-4">
                            {stats.priceVariations.slice(0, 5).map((v, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <div>
                                  <p className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{v.code}</p>
                                  <p className="text-[10px] text-slate-400 line-clamp-1">{v.supplier}</p>
                                </div>
                                <span className="text-xs font-bold text-red-600">+{v.variation.toFixed(1)}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Estimated Tax Burden */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                          <ShieldCheck className="w-5 h-5 text-red-600" />
                          Carga Tributária Estimada
                        </h3>
                        <div className="space-y-6">
                          <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total de Impostos</p>
                            <h4 className="text-2xl font-bold text-red-600">
                              R$ {stats.totalTaxesValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </h4>
                            <p className="text-[10px] text-slate-500 mt-1 font-medium">
                              Representa {stats.totalSales > 0 ? ((stats.totalTaxesValue / stats.totalSales) * 100).toFixed(1) : 0}% do faturamento
                            </p>
                          </div>
                          
                          <div className="space-y-3">
                            <TaxItem label="ICMS" value={stats.taxes.icms} total={stats.totalTaxesValue} color="bg-red-500" />
                            <TaxItem label="PIS/COFINS" value={stats.taxes.pis + stats.taxes.cofins} total={stats.totalTaxesValue} color="bg-blue-500" />
                            <TaxItem label="Outros" value={stats.totalTaxesValue - stats.taxes.icms - stats.taxes.pis - stats.taxes.cofins} total={stats.totalTaxesValue} color="bg-slate-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {viewMode === 'fiscal' && (
                <div className="space-y-8">
                  {/* Fiscal Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard 
                      label="Total ICMS" 
                      value={`R$ ${stats.taxes.icms.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<ShieldCheck className="w-5 h-5 text-red-500" />}
                    />
                    <StatCard 
                      label="Total IPI" 
                      value={`R$ ${stats.taxes.ipi.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<FileText className="w-5 h-5 text-blue-500" />}
                    />
                    <StatCard 
                      label="PIS / COFINS" 
                      value={`R$ ${(stats.taxes.pis + stats.taxes.cofins).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<CreditCard className="w-5 h-5 text-emerald-500" />}
                    />
                    <StatCard 
                      label="ICMS ST" 
                      value={`R$ ${stats.taxes.st.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<AlertCircle className="w-5 h-5 text-amber-500" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                      {/* CFOP Consolidation */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                          <Layers className="w-5 h-5 text-red-600" />
                          Consolidação por CFOP
                        </h3>
                        <div className="h-[300px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.cfopChartData} layout="vertical">
                              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                              <XAxis type="number" fontSize={10} axisLine={false} tickLine={false} />
                              <YAxis dataKey="name" type="category" fontSize={10} axisLine={false} tickLine={false} width={40} />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                formatter={(v: number) => [`R$ ${v.toLocaleString('pt-BR')}`, 'Total']}
                              />
                              <Bar dataKey="value" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Tax Summary */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                          <ShieldCheck className="w-5 h-5 text-red-600" />
                          Resumo de Tributos Consolidado
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                          <TaxItem label="ICMS" value={stats.taxes.icms} total={stats.totalTaxesValue} color="bg-red-500" />
                          <TaxItem label="ICMS ST" value={stats.taxes.st} total={stats.totalTaxesValue} color="bg-amber-500" />
                          <TaxItem label="IPI" value={stats.taxes.ipi} total={stats.totalTaxesValue} color="bg-blue-500" />
                          <TaxItem label="PIS" value={stats.taxes.pis} total={stats.totalTaxesValue} color="bg-emerald-500" />
                          <TaxItem label="COFINS" value={stats.taxes.cofins} total={stats.totalTaxesValue} color="bg-indigo-500" />
                          <TaxItem label="ISSQN" value={stats.taxes.issqn} total={stats.totalTaxesValue} color="bg-cyan-500" />
                          <TaxItem label="FCP" value={stats.taxes.fcp} total={stats.totalTaxesValue} color="bg-purple-500" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Top Suppliers */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                          <Truck className="w-5 h-5 text-red-600" />
                          Principais Fornecedores
                        </h3>
                        <div className="space-y-4">
                          {stats.topSuppliers.slice(0, 5).map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between group">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500">
                                  {idx + 1}
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</p>
                                  <p className="text-[10px] text-slate-400 font-mono">{item.id}</p>
                                </div>
                              </div>
                              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                                R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CST Distribution */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                          <PieChartIcon className="w-5 h-5 text-red-600" />
                          Distribuição por CST/CSOSN
                        </h3>
                        <div className="h-[200px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={Object.entries(stats.cstTotals).map(([name, value]) => ({ name, value }))}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {Object.entries(stats.cstTotals).map((_, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* UF Distribution */}
                      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                          <MapPin className="w-5 h-5 text-red-600" />
                          Distribuição por UF
                        </h3>
                        <div className="h-[200px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.ufChartData}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                              <YAxis fontSize={10} axisLine={false} tickLine={false} />
                              <Tooltip />
                              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {viewMode === 'alerts' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-2xl border border-red-100 dark:border-red-900/50">
                      <p className="text-xs font-bold text-red-600 uppercase mb-1">Críticos</p>
                      <h4 className="text-2xl font-bold text-red-700 dark:text-red-400">
                        {stats.alerts.filter(a => a.type === 'error').length}
                      </h4>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/50">
                      <p className="text-xs font-bold text-amber-600 uppercase mb-1">Avisos</p>
                      <h4 className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                        {stats.alerts.filter(a => a.type === 'warning').length}
                      </h4>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                      <p className="text-xs font-bold text-blue-600 uppercase mb-1">Informativos</p>
                      <h4 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                        {stats.alerts.filter(a => a.type === 'info').length}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stats.alerts.map((alert, idx) => (
                      <div 
                        key={idx}
                        className={`p-6 rounded-2xl border flex gap-4 transition-all hover:shadow-md ${
                          alert.type === 'error' 
                            ? 'bg-white dark:bg-slate-900 border-red-200 dark:border-red-900/50' 
                            : alert.type === 'warning'
                            ? 'bg-white dark:bg-slate-900 border-amber-200 dark:border-amber-900/50'
                            : 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-900/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          alert.type === 'error' ? 'bg-red-100 text-red-600' : 
                          alert.type === 'warning' ? 'bg-amber-100 text-amber-600' : 
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {alert.type === 'error' ? <XCircle className="w-6 h-6" /> : 
                           alert.type === 'warning' ? <AlertTriangle className="w-6 h-6" /> : 
                           <Info className="w-6 h-6" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                              alert.category === 'fiscal' ? 'bg-purple-100 text-purple-700' :
                              alert.category === 'gerencial' ? 'bg-blue-100 text-blue-700' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {alert.category}
                            </span>
                            <h4 className="font-bold text-slate-900 dark:text-white">{alert.title}</h4>
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{alert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {viewMode === 'financeiro' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <StatCard 
                      label="Ticket Médio" 
                      value={`R$ ${stats.ticketMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<Activity className="w-5 h-5 text-amber-500" />}
                    />
                    <StatCard 
                      label="Total Descontos" 
                      value={`R$ ${stats.taxes.discount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<ArrowDownRight className="w-5 h-5 text-red-500" />}
                    />
                    <StatCard 
                      label="Total Outros" 
                      value={`R$ ${stats.taxes.others.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<DollarSign className="w-5 h-5 text-slate-500" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                        <CreditCard className="w-5 h-5 text-red-600" />
                        Meios de Pagamento
                      </h3>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={stats.paymentChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={100}
                              paddingAngle={5}
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {stats.paymentChartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(v: number) => `R$ ${v.toLocaleString('pt-BR')}`} />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                        Resumo Financeiro
                      </h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                          <span className="text-sm text-slate-500">Valor Bruto</span>
                          <span className="text-lg font-bold text-slate-900 dark:text-white">R$ {stats.totalSales.toLocaleString('pt-BR')}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-950/20 rounded-xl">
                          <span className="text-sm text-red-600">Total Descontos</span>
                          <span className="text-lg font-bold text-red-600">- R$ {stats.taxes.discount.toLocaleString('pt-BR')}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl">
                          <span className="text-sm text-emerald-600">Valor Líquido Estimado</span>
                          <span className="text-lg font-bold text-emerald-600">R$ {(stats.totalSales - stats.taxes.discount).toLocaleString('pt-BR')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {viewMode === 'logistica' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <StatCard 
                      label="Total Frete" 
                      value={`R$ ${stats.taxes.freight.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<Truck className="w-5 h-5 text-blue-500" />}
                    />
                    <StatCard 
                      label="Total Seguro" 
                      value={`R$ ${stats.taxes.insurance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                      icon={<ShieldCheck className="w-5 h-5 text-indigo-500" />}
                    />
                    <StatCard 
                      label="Estados Atendidos" 
                      value={stats.ufChartData.length.toString()}
                      icon={<MapPin className="w-5 h-5 text-red-500" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                        <MapPin className="w-5 h-5 text-red-600" />
                        Distribuição Regional (Faturamento por UF)
                      </h3>
                      <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={stats.ufChartData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                            <XAxis type="number" fontSize={10} axisLine={false} tickLine={false} />
                            <YAxis dataKey="name" type="category" fontSize={10} axisLine={false} tickLine={false} width={40} />
                            <Tooltip formatter={(v: number) => `R$ ${v.toLocaleString('pt-BR')}`} />
                            <Bar dataKey="value" fill="#ef4444" radius={[0, 4, 4, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                        <Package className="w-5 h-5 text-red-600" />
                        Top 10 NCMs (Categorias de Produtos)
                      </h3>
                      <div className="space-y-4">
                        {stats.ncmChartData.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="font-mono text-slate-500">{item.name}</span>
                              <span className="font-bold text-slate-900 dark:text-white">R$ {item.value.toLocaleString('pt-BR')}</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-red-500" 
                                style={{ width: `${(item.value / stats.totalSales) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {viewMode === 'list' && (
                <div className="space-y-8">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Search className="w-5 h-5 text-red-600" />
                        Auditória de Notas Fiscais
                      </h3>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="text"
                          placeholder="Buscar por chave, número ou nome..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2 text-xs outline-none focus:ring-2 focus:ring-red-600 transition-all w-64"
                        />
                      </div>
                    </div>
                    <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                      <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 z-10">
                          <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                            <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">NF-e / Data</th>
                            <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Tipo</th>
                            <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Emitente / Destinatário</th>
                            <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Valor Total</th>
                            <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-center">Ação</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                          {nfeList
                            .filter(n => 
                              !searchTerm || 
                              n.key.includes(searchTerm) || 
                              n.number.includes(searchTerm) || 
                              n.issuer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              n.recipient.name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((n, idx) => (
                            <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                              <td className="px-6 py-4">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">Nº {n.number}</p>
                                <p className="text-[10px] text-slate-400">{new Date(n.emissionDate).toLocaleDateString('pt-BR')}</p>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                                  n.type === 'entrada' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                                }`}>
                                  {n.type.toUpperCase()}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-1 h-8 bg-red-600 rounded-full" />
                                  <div>
                                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 line-clamp-1">
                                      {n.type === 'saída' ? n.recipient.name : n.issuer.name}
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-mono">
                                      {n.type === 'saída' ? n.recipient.cnpjCpf : n.issuer.cnpj}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white text-right font-mono">
                                R$ {n.totals.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                              </td>
                              <td className="px-6 py-4 text-center">
                                <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-red-600">
                                  <Info className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, icon, trend, trendUp, subValue }: { 
  label: string, 
  value: string, 
  icon: React.ReactNode, 
  trend?: string, 
  trendUp?: boolean,
  subValue?: string
}) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${
            trendUp ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
          }`}>
            {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {trend}
          </div>
        )}
      </div>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</p>
      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{value}</h4>
      {subValue && <p className="text-[10px] text-slate-400 mt-2 font-medium">{subValue}</p>}
    </div>
  );
}

function TaxItem({ label, value, total, color }: { label: string, value: number, total: number, color: string }) {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
        <span className="text-[10px] font-bold text-slate-900 dark:text-white">
          R$ {value.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
        </span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className={`h-full ${color}`} 
        />
      </div>
    </div>
  );
}
