import Header from "@/components/Header";
import Link from "next/link";

const certifications = [
  {
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google",
    date: "Jan 2026",
    bullets: [
      "Designed end-to-end BI workflows from raw data to executive dashboards",
      "Built ETL pipelines and optimized data transformations",
      "Modeled business data for performance and scalability",
      "Translated stakeholder requirements into measurable KPIs",
    ],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/9VC2FD2B1HAA",
    highlight: true,
  },
];

const courses = [
  {
    title: "The Path to Insights: Data Models and Pipelines",
    issuer: "Google",
    date: "Dec 2025",
    bullets: [
      "Designed scalable data models and structured analytical datasets",
      "Built and optimized data pipelines using BigQuery",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/TALHI0V6A3IB",
  },
  {
    title: "Decisions, Decisions: Dashboards and Reports",
    issuer: "Google",
    date: "Jan 2026",
    bullets: [
      "Developed executive-ready dashboards with actionable KPIs",
      "Applied data storytelling principles to improve decision-making",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/G0CYQTPRMI3W",
  },
  {
    title: "Foundations of Business Intelligence",
    issuer: "Google",
    date: "Dec 2025",
    bullets: [
      "Identified business requirements and translated them into measurable KPIs",
      "Understood BI lifecycle from stakeholder need → data model → reporting",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/LPSK90Q551QT",
  },
  {
    title: "Spreadsheet Modelling",
    issuer: "Harvard Business Publishing",
    date: "Aug 2025",
    bullets: [
      "Built structured financial and analytical models in Excel",
      "Applied scenario analysis and data-driven forecasting techniques",
    ],
  },
  {
    title: "Getting Started with Data Visualization in R",
    issuer: "Johns Hopkins University",
    date: "Aug 2025",
    bullets: [
      "Created statistical visualizations using R and ggplot2",
      "Communicated analytical insights through structured visual narratives",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/1P5OHXD6TZC4",
  },
  {
    title: "AI Literacy for the Real World",
    issuer: "Handshake",
    date: "Oct 2025",
    bullets: [
      "Applied prompt design principles for practical AI use cases",
      "Evaluated responsible and effective integration of AI tools in workflows",
    ],
    link: "https://media.licdn.com/dms/image/v2/D562DAQGaEVHgUn3tiA/profile-treasury-document-images_1920/B56ZojMZtvHAAs-/1/1761527048541?e=1773273600&v=beta&t=7j8B4g48RKSqfK0I_P5hKnGthYjYA93bzgyjuWihEuQ",
  },
];

const techStack = [
  { category: "Analytics & BI", items: ["Tableau", "Power BI", "Excel", "SQL", "BigQuery"] },
  { category: "Machine Learning", items: ["scikit-learn", "Logistic Regression", "Random Forest", "KNN", "PCA", "Time-Series"] },
  { category: "Programming", items: ["Python (Pandas, NumPy)", "R (ggplot2)", "Django", "Flask", "FastAPI"] },
  { category: "AI & NLP", items: ["LLMs", "RAG", "Rasa", "DialogflowCX", "Elasticsearch", "Haystack"] },
  { category: "Cloud & DevOps", items: ["Google BigQuery", "Google Dataflow", "Docker", "Redis", "Celery", "Git"] },
  { category: "Microsoft 365", items: ["Power BI", "PowerApps", "Power Automate", "SharePoint"] },
];

const education = [
  {
    degree: "MS Business Analytics",
    school: "Fox School of Business, Temple University",
    period: "2025–2026",
    detail: "GPA: 3.78 · Expected December 2026",
    courses: "Statistical Learning, ML, Time-Series, Optimization, Monte Carlo Simulation, Decision Models",
  },
  {
    degree: "B.Tech Electronics & Communication Engineering",
    school: "College of Engineering, Chengannur",
    period: "2017–2021",
    detail: "Kerala, India",
    courses: "",
  },
];

export default function Credentials() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main className="pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Page Title */}
          <section>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Background & Qualifications</p>
            <h1 className="text-5xl font-bold mb-4">Credentials</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Continuous development across analytics, AI systems, backend engineering, and cloud technologies.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-100 text-lg">{edu.degree}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">{edu.school}</p>
                      <p className="text-gray-500 text-sm mt-1">{edu.detail}</p>
                      {edu.courses && (
                        <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                          Coursework: {edu.courses}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 bg-white/5 border border-white/10 rounded-lg px-3 py-1 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className={`border rounded-2xl p-6 transition ${
                    cert.highlight
                      ? "bg-white/8 border-white/20 hover:border-white/30"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
                    <div>
                      {cert.highlight && (
                        <span className="text-xs bg-white text-black rounded-md px-2 py-0.5 font-medium mb-2 inline-block">
                          Professional Certificate
                        </span>
                      )}
                      <h3 className="font-semibold text-gray-100 text-lg">{cert.title}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">{cert.issuer} · {cert.date}</p>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {cert.bullets.map((b) => (
                      <li key={b} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-gray-600 mt-1">·</span> {b}
                      </li>
                    ))}
                  </ul>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-300 border border-white/20 rounded-lg px-4 py-2 hover:border-white/40 hover:text-white transition"
                    >
                      View Credential ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Courses */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Courses</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-100 text-sm leading-snug mb-1">{course.title}</h3>
                    <p className="text-gray-500 text-xs mb-3">{course.issuer} · {course.date}</p>
                    <ul className="space-y-1 mb-4">
                      {course.bullets.map((b) => (
                        <li key={b} className="text-gray-400 text-xs flex gap-2">
                          <span className="text-gray-600 mt-0.5">·</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-gray-300 transition underline underline-offset-2"
                    >
                      View credential ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Technical Stack</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {techStack.map((group) => (
                <div key={group.category} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-xs text-gray-300 bg-white/8 border border-white/10 rounded-lg px-2.5 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ongoing Learning */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Ongoing Learning</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-medium text-gray-300 mb-3">Continuous & Agentic Analytics</h3>
              <ul className="space-y-2">
                {[
                  "Exploring agentic analytics workflows for AI-driven decision-making",
                  "Designing AI-powered dashboards and predictive models",
                  "Experimenting with LLMs for automated insights generation (RAG, prompt engineering)",
                  "Enhancing end-to-end analytics pipelines for real-time, actionable business insights",
                ].map((item) => (
                  <li key={item} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-gray-600 mt-1">·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Excel End-to-End Analytics Project
              </h3>
              <ul className="space-y-2">
                {[
                  "Building an end-to-end analytics workflow entirely in Excel covering data cleaning, processing, analysis, and visualization",
                  "Using Ablebits for advanced data cleaning and transformation",
                  "Leveraging Pivot Tables and Pivot Charts for exploratory data analysis",
                  "Applying Crystal Ball for simulation, forecasting, and predictive modeling",
                  "Designing interactive dashboards to present key business insights and trends",
                ].map((item) => (
                  <li key={item} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-gray-600 mt-1">·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Back */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
