import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  dataPipeline: string[];
  image?: string;
  link?: string;
  tags: string[];
  githubUrl?: string;
  attachments?: { name: string; url: string }[];
  keyLearnings?: string[];
};

const projects: Record<string, Project> = {
  "chatbot-cost-knn": {
    title: "Predicting Chatbot Conversation Cost",
    tags: ["KNN", "Python", "Regression", "scikit-learn"],
    description: `Used KNN regression to predict the total cost of a chatbot conversation early — based on the first 5 minutes of interaction signals. Built on a mock dataset inspired by real chatbot logs, this project demonstrates how early behavioral features can predict resource consumption.`,
    dataPipeline: [
      "Load mock chatbot conversation dataset (CSV)",
      "Clean and normalize features (distance-based model requires normalization)",
      "Split dataset into train and test sets",
      "Train KNN regressor and tune neighbors using RMSE",
      "Evaluate predictions on test set",
      "Analyze limitations and potential improvements",
    ],
    image: "/images/chatbot_knn.png",
    link: "/projects/KNN Chatbot Price Pred.html",
    attachments: [
      { name: "KNN Chatbot Price Prediction (Interactive Notebook)", url: "/projects/KNN Chatbot Price Pred.html" },
      { name: "Dataset CSV", url: "/projects/Chatbot Pricing Data - KNN Data.csv" },
    ],
    keyLearnings: [
      "Applied KNN regression to predict chatbot conversation cost using early interaction signals.",
      "Learned importance of feature normalization and early feature selection for distance-based models.",
      "Recognized limitations: outliers, noisy data, rare expensive cases.",
      "Potential improvements: tree-based models, larger dataset, additional features for better accuracy.",
    ],
  },
  "chatbot-satisfaction-classification": {
    title: "Predicting Chatbot Conversation Success",
    tags: ["Classification", "Logistic Regression", "LDA", "QDA", "scikit-learn"],
    description: `Analyzed and predicted user satisfaction in chatbot conversations using multiple classification models. Using behavioral and system features from the first few minutes of interaction, the goal was to classify early whether a conversation would succeed or fail — enabling proactive intervention.`,
    dataPipeline: [
      "Load mock chatbot conversation dataset (~700 conversations)",
      "Clean and normalize numeric features; one-hot encode categorical features",
      "Engineer features: cost per message, engagement intensity, model-user interaction, response time",
      "Split dataset into train/test sets (80/20) with stratification",
      "Train and evaluate KNN, Logistic Regression, LDA, and QDA classifiers",
      "Visualize confusion matrices; calculate precision, recall, and F1-score",
      "Analyze model performance, limitations, and deployment considerations",
    ],
    image: "/images/classification.png",
    link: "/projects/Predict Conversation Success Satisfaction.html",
    attachments: [
      { name: "Conversation Success Classification (Interactive Notebook)", url: "/projects/Predict Conversation Success Satisfaction.html" },
      { name: "Dataset CSV", url: "/projects/Chatbot_Conversation_Data.csv" },
    ],
    keyLearnings: [
      "Applied multiple classification models to predict chatbot conversation success.",
      "Learned the importance of handling class imbalance and feature encoding.",
      "Recognized limitations: small dataset, low recall for minority class, missing text embeddings.",
      "Potential improvements: oversampling, NLP embeddings, ensemble models, hyperparameter tuning.",
    ],
  },
  "ai-knowledge-base-optimization": {
    title: "AI Knowledge Base Optimization with Random Forest",
    tags: ["Random Forest", "Feature Importance", "Python", "scikit-learn"],
    description: `Analyzed enterprise-style AI support conversations to understand why some queries succeed while others fail. Built a machine learning pipeline using Random Forest to predict query success and identify the key drivers of knowledge retrieval performance — useful for optimizing AI support systems.`,
    dataPipeline: [
      "Load AI knowledge base interaction dataset (~740 conversations)",
      "Clean dataset and encode categorical variables (query category, retrieval method, model tier)",
      "Engineer behavioral features: conversation duration, query complexity",
      "Split dataset into training and testing sets",
      "Train Random Forest classifier to predict query success",
      "Evaluate with confusion matrix and classification metrics",
      "Analyze feature importance to identify factors affecting AI retrieval success",
      "Explore query categories, knowledge article effectiveness, and escalation patterns",
    ],
    image: "/images/knowledge_optimization.png",
    link: "/projects/rf-knowledge-base-optimization.html",
    attachments: [
      { name: "Knowledge Base Optimization (Interactive Notebook)", url: "/projects/rf-knowledge-base-optimization.html" },
      { name: "Dataset CSV", url: "/projects/ai_kb_analysis_dataset.csv" },
    ],
    keyLearnings: [
      "Applied Random Forest to predict success of AI knowledge base queries.",
      "Learned how conversation features like query complexity and retrieval method affect success rates.",
      "Used confusion matrix evaluation to identify incorrect retrieval predictions.",
      "Recognized importance of knowledge article coverage and retrieval strategy in AI support systems.",
      "Potential improvements: NLP embeddings from query text, clustering, Power BI dashboards.",
    ],
  },
  "global-homicide-analysis-ml": {
    title: "Global Homicide Rate Analysis & Forecasting",
    tags: ["K-Means", "PCA", "Random Forest", "Logistic Regression", "Time Series", "Python", "scikit-learn"],
    
    description: `Developed an end-to-end machine learning project analyzing global homicide rate data to uncover patterns across countries and forecast future trends. The project integrates exploratory data analysis, clustering, classification, regression, and time-series forecasting to provide a comprehensive understanding of crime patterns and risk levels.`,
    
    dataPipeline: [
      "Load global homicide dataset with country and year-level data",
      "Clean and preprocess data by filtering relevant categories and handling missing values",
      "Perform exploratory data analysis (EDA) including distributions, trends, and heatmaps",
      "Engineer country-level statistical features (mean, std, min, max homicide rates)",
      "Apply PCA for dimensionality reduction and visualization",
      "Use K-Means clustering to segment countries based on homicide patterns",
      "Create risk labels (Low, Medium, High) and train classification models (Logistic Regression, KNN, Random Forest)",
      "Build regression models to predict homicide rates using engineered features",
      "Perform time-series forecasting (ARIMA/Prophet) to predict future homicide trends",
      "Evaluate models using accuracy, RMSE, R², and visualization techniques",
    ],
    
    image: "/images/homicide-analysis-ML.png",
    
    link: "/projects/Homicide-Rate-across-Countries-Analysis.html",

    githubUrl: "https://github.com/atleenjose/homicide-rate-analysis-ml",

    attachments: [
      { name: "GitHub Repository", url: "https://github.com/atleenjose/homicide-rate-analysis-ml" },
      { name: "Global Homicide Rate Analysis & Forecasting (Interactive Notebook)", url: "/projects/Homicide-Rate-across-Countries-Analysis.html" },
      { name: "Dataset CSV", url: "/projects/homicide-analysis-ML.csv" },
    ],
    
    keyLearnings: [
      "Built an end-to-end machine learning pipeline combining supervised and unsupervised learning techniques.",
      "Applied clustering (K-Means) and PCA to identify patterns across countries.",
      "Developed classification models to categorize countries into risk levels based on homicide rates.",
      "Used regression models to predict homicide rates and analyze key influencing factors.",
      "Implemented time-series forecasting to understand and predict future crime trends.",
      "Strengthened skills in data preprocessing, feature engineering, and model evaluation.",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return notFound();

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <section className="px-6 pt-28 pb-24">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/data-pipelines" className="text-sm text-gray-500 hover:text-white transition">
              ← ML & Data Projects
            </Link>
          </div>

          {/* Title */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">{project.title}</h1>
            <p className="text-gray-400 leading-relaxed">{project.description}</p>
          </div>

          {/* Image */}
          {project.image && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-white/10">
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </div>
          )}

          {/* Pipeline Steps */}
          <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-5 text-gray-100">Data Pipeline</h2>
            <ol className="space-y-3">
              {project.dataPipeline.map((step, idx) => (
                <li key={idx} className="flex gap-4 items-start text-sm text-gray-400">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/8 border border-white/15 rounded-full flex items-center justify-center text-xs text-gray-400 font-medium">
                    {idx + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Key Learnings */}
          <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-100">Key Learnings</h2>
            <ul className="space-y-2">
              {project.keyLearnings?.map((learning, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex gap-2">
                  <span className="text-gray-600 mt-1">·</span> {learning}
                </li>
              ))}
            </ul>
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-4 py-2 transition mb-8"
            >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      )}

          {/* Attachments & Interactive Notebooks */}
          {project.attachments && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold mb-5 text-gray-100">Interactive Notebooks</h2>
              {project.attachments
                .filter((f) => f.name.toLowerCase().endsWith(".html") || f.url.toLowerCase().endsWith(".html"))
                .map((file, idx) => (
                  <div key={idx} className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-400">{file.name}</p>
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-white transition underline underline-offset-2"
                      >
                        Open in new tab ↗
                      </a>
                    </div>
                    <iframe
                      src={file.url}
                      className="w-full h-[600px] border border-white/10 rounded-xl bg-white"
                      title={file.name}
                    />
                  </div>
                ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
