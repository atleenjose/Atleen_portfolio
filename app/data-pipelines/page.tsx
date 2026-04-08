import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

type Project = {
  title: string;
  slug: string;
  shortDesc: string;
  image?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    slug: "chatbot-cost-knn",
    title: "Predicting Chatbot Conversation Cost",
    shortDesc: "KNN regression to predict chatbot conversation cost using early interaction signals — messages, tokens, model tier.",
    image: "/images/chatbot_knn.png",
    tags: ["KNN", "Python", "Regression"],
  },
  {
    slug: "chatbot-satisfaction-classification",
    title: "Predicting Chatbot Conversation Success",
    shortDesc: "Classification models (KNN, Logistic Regression, LDA, QDA) to predict whether a chatbot conversation succeeds or fails.",
    image: "/images/classification.png",
    tags: ["Classification", "Logistic Regression", "scikit-learn"],
  },
  {
    slug: "ai-knowledge-base-optimization",
    title: "AI Knowledge Base Optimization",
    shortDesc: "Random Forest model to predict success of AI knowledge base queries and identify retrieval gaps.",
    image: "/images/knowledge_optimization.png",
    tags: ["Random Forest", "Feature Importance", "Python"],
  },
  {
    slug: "global-homicide-analysis-ml",
    title: "Global Homicide Rate Analysis & Forecasting",
    shortDesc: "End-to-end ML pipeline using clustering, classification, regression, and time-series forecasting to analyze global homicide trends.",
    image: "/images/homicide-analysis-ML.png",
    tags: ["Clustering", "Classification", "Regression", "Time Series", "Python"],
  },
];

export default function DataPipelinesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="px-6 pt-28 pb-24">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Machine Learning</p>
            <h1 className="text-5xl font-bold mb-4 text-gray-100">ML & Data Projects</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Supervised learning models applied to real business problems — classification, regression, and feature analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link key={project.slug} href={`/data-pipelines/${project.slug}`}>
                <div className="group bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300 h-full flex flex-col">
                  {project.image && (
                    <div className="relative w-full h-48 overflow-hidden bg-neutral-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.shortDesc}</p>
                    <div className="mt-5 text-sm text-gray-500 group-hover:text-gray-300 transition flex items-center gap-1">
                      View project <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
