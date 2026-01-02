export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* INTRO */}
      <section className="min-h-screen flex items-center px-8">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Atleen Jose
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Business Analytics · AI · Data Engineering
          </p>
          <p className="mt-10 text-2xl md:text-3xl max-w-3xl text-gray-300 mx-auto">
            I design analytics systems, build data pipelines, and apply AI to
            transform raw data into insights stakeholders can act on.
          </p>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-8 h-8 text-gray-400 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="px-8 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16">What I Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition">
              <h3 className="text-2xl font-medium mb-4">Analytics Dashboards</h3>
              <p className="text-gray-300 leading-relaxed">
                Design stakeholder-focused dashboards using Tableau and SQL...
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition">
              <h3 className="text-2xl font-medium mb-4">Data Pipelines</h3>
              <p className="text-gray-300 leading-relaxed">
                Build reliable ETL and ELT pipelines using Python, BigQuery...
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition">
              <h3 className="text-2xl font-medium mb-4">AI & NLP Systems</h3>
              <p className="text-gray-300 leading-relaxed">
                Apply NLP and LLMs to search, summarize, and extract insights...
              </p>
            </div>
            <div className="border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition">
              <h3 className="text-2xl font-medium mb-4">Stakeholder Decision Frameworks</h3>
              <p className="text-gray-300 leading-relaxed">
                Translate ambiguous stakeholder needs into structured analysis...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
