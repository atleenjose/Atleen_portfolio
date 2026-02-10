import Link from "next/link";
import Header from "@/components/Header";

export default function StakeholderDecisionFrameworkPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="px-8 py-20 max-w-6xl mx-auto space-y-24">

        {/* HERO */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Stakeholder Decision Framework
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A structured approach to translating stakeholder needs into
            data pipelines, dashboards, and executive-ready insights.
          </p>
        </div>

        {/* FRAMEWORK OVERVIEW */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">
            End-to-End Analytics Framework
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="
  bg-neutral-900/60 backdrop-blur
  border border-white/10
  rounded-2xl p-6
  hover:border-white/30 transition
">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
  Step 1
</span>

              <h3 className="text-xl font-medium mb-3">
                1. Stakeholder Alignment
              </h3>
              <p className="text-gray-400">
                Collaborated with stakeholders to understand business goals,
                define success metrics, and create planning artifacts such as
                requirements, KPI definitions, and dashboard mockups.
              </p>
               <a
          href="/Stakeholder requirements CSOAF.pdf"
          target="_blank"
          className="inline-block mt-2 text-sm text-gray-400
             hover:text-white transition
             underline underline-offset-4"
>
          View Stakeholer Requirements Document
        </a>
            </div>

            <div className="
  bg-neutral-900/60 backdrop-blur
  border border-white/10
  rounded-2xl p-6
  hover:border-white/30 transition
">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
  Step 2
</span>

              <h3 className="text-xl font-medium mb-3">
                2. Data Exploration & Feasibility
              </h3>
              <p className="text-gray-400">
                Evaluated available datasets to determine relevance, identify
                gaps, and assess feasibility of addressing business questions.
              </p>
              <a
          href="/Data Quality and Feasibility Assessment.pdf"
          target="_blank"
          className="inline-block mt-2 text-sm text-gray-400
             hover:text-white transition
             underline underline-offset-4"
>
          View Data Exploration and Feasibility Document
        </a>
            </div>
          </div>
        </div>

        {/* CASE STUDY */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Applied Case Study
          </h2>
          <p className="text-gray-400 max-w-4xl">
            This framework was applied to a customer service and operations
            dataset (Google Fiber–style use case) to simulate a real-world
            stakeholder engagement using modern analytics tools.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Dataset: Public customer & service performance data</li>
            <li>Tools: Google Dataflow, BigQuery, Tableau</li>
            <li>Goal: Enable long-term monitoring and decision support</li>
          </ul>
        </div>

        {/* DECISION QUESTIONS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Key Decision Questions
          </h2>

          <div className="space-y-4 text-gray-400">
            <p>• Which parts of the dataset address the business requirement?</p>
            <p>• Which measures and dimensions best represent stakeholder needs?</p>
            <p>• Which chart types most effectively communicate insights?</p>
            <p>• How should information be encoded for clarity and accessibility?</p>
          </div>
        </div>

        {/* DATA & PIPELINES */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Data Architecture & Pipelines
          </h2>

          <p className="text-gray-400 max-w-4xl">
            Designed analytical target tables and implemented ETL and ELT
            workflows to ensure reliable, scalable, and analysis-ready data.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Built data pipelines using Google Dataflow</li>
            <li>Modeled analytical tables in BigQuery</li>
            <li>Optimized datasets for BI and dashboard performance</li>
          </ul>
        </div>

        {/* DASHBOARD DESIGN CHECKLIST */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">
            Dashboard Design & Validation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-medium">Design & Planning</h3>
              <p className="text-gray-400">
                Dashboard mockups were created early, with key business
                questions clearly defined and validated.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-medium">Visualization & Interaction</h3>
              <p className="text-gray-400">
                Relevant charts were selected, compiled into an interactive
                dashboard, and designed for long-term monitoring.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-medium">Accessibility</h3>
              <p className="text-gray-400">
                Visualizations were designed to be understandable by both
                technical and non-technical audiences.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-medium">Business Alignment</h3>
              <p className="text-gray-400">
                Insights directly aligned with business requirements and
                stakeholder expectations.
              </p>
            </div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Executive Summary
          </h2>
          <p className="text-gray-400 max-w-4xl">
            The final dashboard enabled stakeholders to identify key trends,
            monitor performance over time, and prioritize actions based on
            data-driven insights rather than isolated metrics.
          </p>
        </div>

        {/* ARTIFACTS */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Project Artifacts
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Stakeholder Requirements Document",
              "Dashboard Mockup",
              "KPI Definitions",
              "Executive Summary",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-2xl p-5 hover:border-white/30 transition"
              >
                <p className="font-medium mb-2">{item}</p>
                <p className="text-sm text-gray-400">
                  View supporting project documentation.
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
