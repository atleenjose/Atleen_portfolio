import Header from "@/components/Header";
import Link from "next/link";

export default function SalesQuantityPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="px-6 pt-28 pb-24">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/analytics" className="text-sm text-gray-500 hover:text-white transition">
              ← Analytics Dashboards
            </Link>
          </div>

          {/* Header */}
          <div className="flex items-start justify-between gap-6 flex-wrap mb-12">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Tableau</span>
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Sales Analytics</span>
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Time-Series</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-100 mb-4">
                Sales Quantity Analysis (2022–2023)
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                Comparative sales analysis examining quantity trends across 2022 and 2023 to identify growth patterns, seasonal behavior, and performance shifts.
              </p>
            </div>
            <a
              href="https://public.tableau.com/app/profile/atleen.jose/viz/SalesQuantity20222023Analysis/Dashboard1#1"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 border border-white/20 rounded-xl px-5 py-3 text-sm text-gray-300 hover:border-white/40 hover:text-white transition"
            >
              View on Tableau ↗
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Business Question</h2>
              <p className="text-gray-300 leading-relaxed">
                How did sales quantity change between 2022 and 2023, and what trends or seasonal patterns explain the variation?
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Business Value</h2>
              <p className="text-gray-300 leading-relaxed">
                Supports inventory planning, sales forecasting, and strategic decision-making by enabling stakeholders to understand demand trends across multiple years.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Analytical Approach</h2>
            <ul className="space-y-2">
              {[
                "Compared monthly and yearly sales quantities",
                "Identified seasonality and peak demand periods",
                "Analyzed year-over-year growth and decline trends",
                "Designed visuals to highlight performance shifts",
              ].map((item) => (
                <li key={item} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-gray-600 mt-1">·</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Key Insights Enabled</h2>
            <ul className="space-y-2">
              {[
                "Clear visibility into year-over-year sales growth",
                "Seasonal demand patterns across both years",
                "Identification of underperforming and high-growth periods",
              ].map((item) => (
                <li key={item} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-gray-600 mt-1">·</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
