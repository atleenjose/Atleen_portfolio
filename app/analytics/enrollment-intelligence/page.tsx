import Header from "@/components/Header";
import Link from "next/link";

export default function EnrollmentIntelligencePage() {
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
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Power BI</span>
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Education Analytics</span>
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">Dropout Risk</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-100 mb-4">
                Student Enrollment Intelligence
              </h1>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                End-to-end analytics project analyzing dropout risk across 4,424 university students. Built on a PostgreSQL star schema with KPIs across age, gender, scholarship status, and academic performance.
              </p>
            </div>
          </div>

          {/* Dashboard Screenshot */}
          <div className="mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
            <img
              src="/images/PowerBI Dashboard Screenshot.png"
              alt="Enrollment Intelligence Power BI Dashboard"
              className="rounded-xl w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Business Question</h2>
              <p className="text-gray-300 leading-relaxed">
                Which student profiles are most at risk of dropping out, and what academic and demographic factors drive that risk?
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Business Value</h2>
              <p className="text-gray-300 leading-relaxed">
                Enables enrollment teams to identify at-risk students early and intervene with targeted support - reducing dropout rates and improving institutional outcomes.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Key Insights</h2>
            <ul className="space-y-2">
              {[
                "32% dropout rate across 4,424 students - 1 in 3 students does not graduate",
                "Students aged 26–35 have the highest dropout risk at 57%, likely due to work and life conflicts",
                "Male students drop out at nearly twice the rate of female students (45% vs 25%)",
                "Scholarship holders are 3x less likely to drop out - financial support is the strongest protective factor",
                "Semester 1 grades are the earliest and strongest predictor of dropout risk",
                "Dropouts average a grade of 7.26 in Semester 1 vs 12.64 for graduates",
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
                "Donut Chart",
                "Clustered Bar Chart",
                "Clustered Column Chart",
                "Table",
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