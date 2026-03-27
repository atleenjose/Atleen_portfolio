import Link from "next/link";
import Header from "@/components/Header";

const techStack = [
  { label: "Python", icon: "🐍" },
  { label: "SQL", icon: "🗄️" },
  { label: "Tableau", icon: "📊" },
  { label: "Power BI", icon: "📈" },
  { label: "BigQuery", icon: "☁️" },
  { label: "scikit-learn", icon: "🤖" },
  { label: "R", icon: "📉" },
  { label: "Django", icon: "🌐" },
  { label: "Docker", icon: "🐳" },
  { label: "Rasa / NLP", icon: "💬" },
  { label: "RAG / LLMs", icon: "🧠" },
  { label: "Excel", icon: "📋" },
];

const workItems = [
  {
    title: "Analytics Dashboards",
    description:
      "Stakeholder-focused dashboards using Tableau and SQL, translating business questions into KPIs, dimensions, and decision-ready visualizations.",
    href: "/analytics",
    tag: "Tableau · SQL",
  },
  {
    title: "ML & Data Projects",
    description:
      "Supervised learning models — KNN, Logistic Regression, Random Forest — applied to real business classification and prediction problems.",
    href: "/data-pipelines",
    tag: "Python · scikit-learn",
  },
  {
    title: "AI & NLP Systems",
    description:
      "Conversational AI platforms, HR chatbots, and NLP pipelines integrating LLMs, Rasa, Elasticsearch, and real-time data systems.",
    href: "/ai-nlp-systems",
    tag: "LLMs · Rasa · Django",
  },
  {
    title: "Stakeholder Frameworks",
    description:
      "Translating ambiguous business needs into structured analysis plans, data pipelines, and executive-ready reporting artifacts.",
    href: "/stakeholder-framework",
    tag: "BigQuery · Dataflow",
  },
];

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* HERO */}
      <section id="intro" className="min-h-screen flex flex-col justify-center items-center px-6 pt-16 relative">
        <div className="max-w-4xl text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Open to opportunities · Philadelphia, PA
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Atleen Jose
          </h1>
          <p className="mt-4 text-lg text-gray-400 tracking-wide">
            Business Intelligence & Analytics · AI · Backend Data Systems
          </p>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I turn raw data into decisions, building pipelines, dashboards, and AI systems that make complex information actionable.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#work"
              className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition text-sm"
            >
              View my work
            </a>
            <a
              href="/Atleen_Jose_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-gray-300 rounded-xl hover:border-white/40 hover:text-white transition text-sm"
            >
              Download Resume ↗
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto">
            <div className="text-center">
              <div className="text-2xl font-semibold">4+</div>
              <div className="text-xs text-gray-500 mt-1">Years experience</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-2xl font-semibold">3.78</div>
              <div className="text-xs text-gray-500 mt-1">GPA at Temple</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold">6+</div>
              <div className="text-xs text-gray-500 mt-1">Projects shipped</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#work" className="absolute bottom-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Tools & Technologies</p>
            <h2 className="text-3xl font-semibold">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/8 rounded-xl text-sm text-gray-300 hover:border-white/20 hover:bg-white/8 transition"
              >
                <span className="text-base">{tech.icon}</span>
                {tech.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section id="work" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">What I Build</p>
            <h2 className="text-4xl font-semibold">Work & Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="group bg-neutral-900/50 border border-white/8 rounded-2xl p-7 h-full hover:border-white/20 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-medium text-gray-100">{item.title}</h3>
                    <span className="text-xs text-gray-500 bg-white/5 border border-white/10 rounded-md px-2 py-1 ml-3 whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                  <div className="mt-5 text-xs text-gray-600 group-hover:text-gray-300 transition flex items-center gap-1">
                    Explore <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SNAPSHOT */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Background</p>
            <h2 className="text-3xl font-semibold">Experience</h2>
          </div>
          <div className="space-y-5">
            <div className="flex gap-6 items-start">
              <div className="text-xs text-gray-500 w-24 shrink-0 pt-1">2025–Present</div>
              <div>
                <div className="font-medium text-gray-100">Data Analyst</div>
                <div className="text-sm text-gray-400">CEHD, Temple University · Philadelphia, PA</div>
                <div className="text-sm text-gray-500 mt-1">Tableau dashboards, data validation, academic & operational reporting</div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-5 flex gap-6 items-start">
              <div className="text-xs text-gray-500 w-24 shrink-0 pt-1">2021–2025</div>
              <div>
                <div className="font-medium text-gray-100">Software Engineer</div>
                <div className="text-sm text-gray-400">Sinergia Media Labs · Kerala, India</div>
                <div className="text-sm text-gray-500 mt-1">AI chatbots, NLP pipelines, analytics dashboards, backend data systems</div>
              </div>
            </div>
            <div className="border-t border-white/5 pt-5 flex gap-6 items-start">
              <div className="text-xs text-gray-500 w-24 shrink-0 pt-1">2025–2026</div>
              <div>
                <div className="font-medium text-gray-100">MS Business Analytics (GPA 3.78)</div>
                <div className="text-sm text-gray-400">Fox School of Business, Temple University</div>
                <div className="text-sm text-gray-500 mt-1">Statistical Learning, ML, Time-Series, Optimization, Monte Carlo Simulation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Get in touch</p>
            <h2 className="text-4xl font-semibold mb-4">Let's connect</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm actively looking for data analyst, BI, or analytics engineering roles. If you have a role or project in mind, reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:atleenjose@gmail.com"
                className="flex items-center gap-2 px-5 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                atleenjose@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/atleen-jose-1603/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-white/20 text-gray-300 rounded-xl hover:border-white/40 hover:text-white transition text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/atleenjose"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-white/20 text-gray-300 rounded-xl hover:border-white/40 hover:text-white transition text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-gray-600">
          <span>© 2026 Atleen Jose</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
