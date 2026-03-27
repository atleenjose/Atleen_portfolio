import Link from "next/link";
import Header from "@/components/Header";

export default function AnalyticsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="px-6 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Tableau · SQL</p>
            <h1 className="text-5xl font-bold mb-4 text-gray-100">Analytics Dashboards</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Stakeholder-focused dashboards translating business questions into KPIs, dimensions, and decision-ready visualizations.
            </p>
          </div>

          <div className="space-y-6">
            {/* Dashboard 1 */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/25 transition-all group">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Tableau</span>
                    <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Customer Analytics</span>
                    <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Churn Analysis</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 text-gray-100">Credit Card Customer Retention</h2>
                  <p className="text-gray-400 leading-relaxed max-w-2xl text-sm">
                    Retention-focused dashboard comparing customers who churn with those who stay, highlighting behavioral and demographic drivers of attrition. Enables proactive retention strategies by identifying high-risk customer segments.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0 flex-wrap">
                  <a
                    href="https://public.tableau.com/app/profile/atleen.jose/viz/CreditCardRetentionAnalysis/Dashboard1#1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 text-sm text-gray-300 rounded-xl hover:border-white/40 hover:text-white transition"
                  >
                    Tableau ↗
                  </a>
                  <Link
                    href="/analytics/credit-card-retention"
                    className="px-4 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-200 transition"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>

            {/* Dashboard 2 */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/25 transition-all group">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Tableau</span>
                    <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Sales Analytics</span>
                    <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Time-Series</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 text-gray-100">Sales Quantity Analysis (2022–2023)</h2>
                  <p className="text-gray-400 leading-relaxed max-w-2xl text-sm">
                    Comparative analysis of sales quantity trends across two years, highlighting growth patterns, seasonality, and performance shifts. Supports inventory planning and strategic decision-making.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0 flex-wrap">
                  <a
                    href="https://public.tableau.com/app/profile/atleen.jose/viz/SalesQuantity20222023Analysis/Dashboard1#1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 text-sm text-gray-300 rounded-xl hover:border-white/40 hover:text-white transition"
                  >
                    Tableau ↗
                  </a>
                  <Link
                    href="/analytics/sales-quantity"
                    className="px-4 py-2 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-200 transition"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
