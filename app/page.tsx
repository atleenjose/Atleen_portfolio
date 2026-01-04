import Link from "next/link";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* INTRO */}
      <section id="intro" className="min-h-screen flex flex-col justify-center items-center px-8 relative">
        <div className="max-w-5xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">Atleen Jose</h1>
          <p className="mt-4 text-xl text-gray-400">
            Business Intelligence & Analytics · AI · Backend Data Systems
          </p>
          <p className="mt-10 text-2xl md:text-3xl max-w-3xl text-gray-300 mx-auto">
            I design analytics systems, build data pipelines, and apply AI to transform raw data into actionable insights.
          </p>
        </div>

        {/* SCROLL INDICATOR */}
        <a href="#work" className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-gray-400 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* WHAT I BUILD */}
      <section id="work" className="px-8 py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16">What I Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard
              title="Analytics Dashboards"
              description="Design stakeholder-focused dashboards using Tableau and SQL, translating business questions into KPIs, dimensions, and decision-ready visualizations."
              href="/analytics"
            />
            <ProjectCard
              title="Data Pipelines"
              description="Build reliable ETL and ELT pipelines using Python, BigQuery, Google Cloud Dataflow, and more."
            />
            <ProjectCard
              title="AI & NLP Systems"
              description="Apply NLP and LLMs to search, summarize, and extract insights from unstructured data, bridging traditional analytics with AI."
              href="/ai-nlp"
            />
            <ProjectCard
              title="Stakeholder Decision Frameworks"
              description="Translate ambiguous stakeholder needs into structured analysis plans."
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-8 py-32 flex items-center justify-center"
      >
        <div className="border border-gray-700 rounded-2xl p-10 text-center max-w-md">
          <h2 className="text-4xl font-semibold mb-6">Contact</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Email: <a href="mailto:atleenjose@gmail.com" className="underline">atleenjose@gmail.com</a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/atleen-jose-1603/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/atleen-jose-1603/
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
