import Header from "@/components/Header";

export default function SalesQuantityPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="px-8 py-24">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <h1 className="text-5xl font-bold text-gray-200 mb-4">
                Sales Quantity Analysis (2022–2023)
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl">
                A comparative sales analysis examining quantity trends across
                2022 and 2023 to identify growth patterns, seasonal behavior,
                and performance shifts.
              </p>
            </div>

            {/* OPTIONAL DASHBOARD LINK */}
            <a
              href="https://public.tableau.com/app/profile/atleen.jose/viz/SalesQuantity20222023Analysis/Dashboard1#1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 rounded-xl px-5 py-3 text-sm text-gray-300 hover:border-gray-500 transition"
            >
              View on Tableau ↗
            </a>
          </div>

          {/* BUSINESS QUESTION */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Business Question</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              How did sales quantity change between 2022 and 2023, and what
              trends or seasonal patterns explain the variation?
            </p>
          </div>

          {/* APPROACH */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Analytical Approach</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Compared monthly and yearly sales quantities</li>
              <li>Identified seasonality and peak demand periods</li>
              <li>Analyzed year-over-year growth and decline trends</li>
              <li>Designed visuals to highlight performance shifts</li>
            </ul>
          </div>

          {/* KEY INSIGHTS */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Key Insights Enabled</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Clear visibility into year-over-year sales growth</li>
              <li>Seasonal demand patterns across both years</li>
              <li>Identification of underperforming and high-growth periods</li>
            </ul>
          </div>

          {/* BUSINESS VALUE */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Business Value</h2>
            <p className="text-gray-300 max-w-3xl leading-relaxed">
              This analysis supports inventory planning, sales forecasting,
              and strategic decision-making by enabling stakeholders to
              understand demand trends across multiple years.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
