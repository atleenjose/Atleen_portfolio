import Link from "next/link";
import Header from "@/components/Header";

export default function AnalyticsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="min-h-screen px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-gray-300 font-bold mb-6">Analytics Dashboards</h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-16">
            A collection of data analytics dashboards built using Tableau, SQL, and structured analytical frameworks. Each dashboard translates business questions into measurable KPIs, dimensions, and actionable insights.
          </p>

          <div className="space-y-20">
            {/* Dashboard 1 */}
            <div className="
  bg-neutral-900/60 backdrop-blur
  border border-white/10
  rounded-2xl p-10
  hover:border-white/30 transition-all
">
              <h2 className="text-3xl font-semibold mb-4">Credit Card Customer Retention</h2>
              <p className="text-gray-300 mb-7 max-w-5xl">
                A retention-focused analytics dashboard comparing customers who churn with those who stay, highlighting behavioral and demographic drivers of attrition.
              </p>
              <Link
                href="/analytics/credit-card-retention"
                className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
              >
                View More
              </Link>
            </div>

            {/* Dashboard 2 */}
            <div className="
  bg-neutral-900/60 backdrop-blur
  border border-white/10
  rounded-2xl p-10
  hover:border-white/30 transition-all
">
            <h2 className="text-3xl font-semibold mb-4">
                Sales Quantity Analysis (2022–2023)
            </h2>
            <p className="text-gray-300 mb-7 max-w-5xl">
                A comparative analysis of sales quantity trends across two years,
                highlighting growth patterns, seasonality, and performance shifts.
            </p>
            <Link
                href="/analytics/sales-quantity"
                className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
            >
                View More
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
