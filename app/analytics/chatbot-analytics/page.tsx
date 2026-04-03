import Header from "@/components/Header";
import Link from "next/link";

export default function ChatbotAnalyticsPage() {
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
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">AI Analytics</span>
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Cost Optimization</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-100 mb-4">
                Chatbot Analytics - AI Model Performance
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                Advanced analytics dashboard tracking 500 AI chatbot sessions across GPT-4, Claude 3, and Gemini Pro spanning 18 countries and three user tiers — surfacing cost efficiency, token usage, and geographic demand.
              </p>
            </div>
            <a
              href="YOUR_TABLEAU_PUBLIC_LINK_HERE"
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
                Which AI model delivers the best value across user segments, and where is chatbot spend concentrated geographically?
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Business Value</h2>
              <p className="text-gray-300 leading-relaxed">
                Enables AI product teams and finance stakeholders to optimize model selection, reduce cost per session, and prioritize markets with the highest engagement and spend.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Analytical Approach</h2>
            <ul className="space-y-2">
              {[
                "Compared cost per session across GPT-4, Claude 3, and Gemini Pro using lollipop and heatmap charts",
                "Tracked model usage ranking shifts over time with a bump chart to identify dominance trends",
                "Visualized token usage distribution across models and user tiers using a box & whisker plot",
                "Mapped session volume and total spend across 18 countries using a choropleth map",
                "Built a waffle chart to show each model's share of total cost as a percentage breakdown",
                "Used a diverging bar chart to highlight countries performing above and below average spend",
                "Combined message volume and average cost into a dual axis bar+line chart for trend analysis",
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
                "GPT-4 and Claude 3 account for over 77% of total session cost despite similar usage volumes",
                "Enterprise users generate significantly higher token counts per message than Free and Pro tiers",
                "The United States, India, and United Kingdom drive the majority of chatbot traffic and spend",
                "Gemini Pro consistently ranks lower in message volume but offers the lowest average cost per session",
                "Weekly cost trends reveal spend spikes that correlate with Enterprise user activity peaks",
              ].map((item) => (
                <li key={item} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-gray-600 mt-1">·</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Charts Used</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Choropleth Map",
                "Bump Chart",
                "Treemap",
                "Waffle Chart",
                "Heatmap",
                "Lollipop Chart",
                "Box & Whisker Plot",
                "Dual Axis Bar + Line",
                "Diverging Bar Chart",
              ].map((chart) => (
                <span
                  key={chart}
                  className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5"
                >
                  {chart}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}