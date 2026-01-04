export default function CreditCardRetentionPage() {
  return (
    <section className="min-h-screen px-8 py-20 bg-black">
      <div className="max-w-5xl mx-auto relative">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="mt-4 text-xl text-gray-300 text-5xl md:text-4xl font-bold leading-tight">
              Credit Card Customer Retention Analysis
            </h1>

            <p className="text-gray-300 text-lg max-w-3xl">
              This case study focuses on understanding customer churn by comparing
              behavioral and demographic characteristics of customers who exit
              the service versus those who remain active.
            </p>
          </div>

          {/* TABLEAU LINK */}
          <a
            href="https://public.tableau.com/app/profile/atleen.jose/viz/CreditCardRetentionAnalysis/Dashboard1#1"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border border-gray-700 rounded-xl px-5 py-3 text-sm text-gray-300 font-bold hover:border-gray-500 hover:text-white transition"
          >
            View on Tableau ↗
          </a>
        </div>

        {/* BUSINESS QUESTION */}
        <div className="mb-16">
          <h2 className="mt-4 text-xl text-gray-300 text-6xl md:text-2xl font-bold leading-tight">
            Business Question
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Which customers are at risk of leaving, and what factors differentiate
            customers who churn from those who stay?
          </p>
        </div>

        {/* APPROACH */}
        <div className="mb-16">
          <h2 className="mt-4 text-xl text-gray-300 text-6xl md:text-2xl font-bold leading-tight">
            Analytical Approach
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Segmented customers based on attrition status</li>
            <li>Analyzed transaction behavior, credit utilization, and inactivity</li>
            <li>Compared demographic attributes across retained and churned groups</li>
            <li>Designed KPIs and visualizations aligned with stakeholder needs</li>
          </ul>
        </div>

        {/* INSIGHTS */}
        <div className="mb-16">
          <h2 className="mt-4 text-xl text-gray-300 text-6xl md:text-2xl font-bold leading-tight">
            Key Insights Enabled
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Clear identification of high-risk customer segments</li>
            <li>Behavioral patterns strongly associated with churn</li>
            <li>Differences in engagement levels between retained and churned customers</li>
          </ul>
        </div>

        {/* VALUE */}
        <div className="mb-16">
          <h2 className="mt-4 text-xl text-gray-300 text-6xl md:text-2xl font-bold leading-tight">
            Business Value
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The dashboard supports proactive retention strategies by enabling
            stakeholders to prioritize at-risk customers, improve engagement,
            and reduce customer attrition.
          </p>
        </div>

      </div>
    </section>
  );
}
