import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  dataPipeline: string[];
  image?: string;
  image2?: string;
  link?: string;
  tags: string[];
  githubUrl?: string;
  live_demo?: string;
  attachments?: { name: string; url: string }[];
  keyLearnings?: string[];
};

const projects: Record<string, Project> = {
  "chatbot-cost-knn": {
    title: "Predicting Chatbot Conversation Cost",
    tags: ["KNN", "Python", "Regression", "scikit-learn"],
    description: `Used KNN regression to predict the total cost of a chatbot conversation early - based on the first 5 minutes of interaction signals. Built on a mock dataset inspired by real chatbot logs, this project demonstrates how early behavioral features can predict resource consumption.`,
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
    description: `Analyzed and predicted user satisfaction in chatbot conversations using multiple classification models. Using behavioral and system features from the first few minutes of interaction, the goal was to classify early whether a conversation would succeed or fail - enabling proactive intervention.`,
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
    description: `Analyzed enterprise-style AI support conversations to understand why some queries succeed while others fail. Built a machine learning pipeline using Random Forest to predict query success and identify the key drivers of knowledge retrieval performance - useful for optimizing AI support systems.`,
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
  "enrollment-intelligence": {
    title: "Student Enrollment Intelligence",
    tags: ["ETL", "PostgreSQL", "Random Forest", "Logistic Regression", "SHAP", "FastAPI", "Python", "PowerBI"],
    description: `End-to-end data engineering and ML project predicting student dropout risk across 4,424 university students. Built a PostgreSQL star schema, ETL pipeline, validation layer, and synthetic data generation. Trained Random Forest (90% accuracy, ROC-AUC 0.95) with SHAP explainability, and served predictions via a live FastAPI deployed on Render.`,
    dataPipeline: [
      "Ingested raw CSV dataset of 4,424 students with 35 features from Kaggle",
      "Built ETL pipeline to clean, transform and load data into PostgreSQL star schema",
      "Designed star schema with fact_enrollments, dim_student, dim_course, dim_economics",
      "Built validation layer flagging mismatched IDs, null statuses, and duplicate enrollment records",
      "Generated synthetic financial_aid and applications tables using Faker (6,000+ rows)",
      "Wrote KPI SQL queries analyzing dropout by age, gender, scholarship, and academic performance",
      "Trained Random Forest classifier achieving 90% accuracy and 0.9478 ROC-AUC predicting Dropout vs Graduate",
      "Added Logistic Regression as baseline model for comparison (ROC-AUC 0.9473)",
      "Applied SHAP TreeExplainer for global feature importance and per-student dropout risk explanation",
      "Top risk factors identified: semester approved units, semester grades, and tuition payment status",
      "Built FastAPI with 3 endpoints - /predict (with SHAP reasons), /student_summary, /kpi_metrics",
      "Deployed FastAPI on Render with cloud PostgreSQL on Neon",
    ],
    image: "/images/PowerBI Dashboard Screenshot.png",
    image2: "/images/Enrollment-Intelligence-ML.png",
    live_demo: "https://enrollment-intelligence.onrender.com/docs",
    githubUrl: "https://github.com/atleenjose/enrollment-intelligence",
    keyLearnings: [
      "Built a complete data engineering pipeline from raw CSV to star schema in PostgreSQL.",
      "Learned how to design dimensional models for analytical queries.",
      "Applied Random Forest with class balancing to handle imbalanced dropout data.",
      "Compared Random Forest vs Logistic Regression using ROC-AUC - RF won by a small margin showing tree models suit this data better.",
      "Used SHAP to explain ML predictions at both global and per-student level - making the model actionable for advisors.",
      "Served ML predictions via a production-ready FastAPI with input validation and SHAP risk factors in the response.",
      "Deployed a full stack data project using Render and Neon - moving from localhost to a live public URL.",
      "Discovered that semester approved units and tuition payment status are the strongest dropout predictors.",
      "Scholarship holders graduate at nearly 2x the rate of non-scholarship students.",
    ],
  },
  "nyc-collision-injury-prediction": {
    title: "Predicting Injury Outcomes in NYC Motor Vehicle Collisions",
    tags: ["Random Forest", "Logistic Regression", "Decision Tree", "KNN", "Python", "scikit-learn"],
    description: `Group project analyzing 44,879 NYC motor vehicle crash records to predict whether a collision results in injury. Applied four classification models and evaluated trade-offs between recall and precision in a public safety context where missing injury cases is costly.`,
    dataPipeline: [
      "Sourced NYC Open Data motor vehicle collisions dataset (Sep 2025 – Mar 2026, 44,879 records)",
      "Cleaned missing values in borough, vehicle type, and location fields",
      "Consolidated 240 distinct vehicle type labels into broader categories",
      "Engineered features: hour of crash, day of week, vehicle count, spatial clusters from lat/long",
      "Applied one-hot encoding to categorical variables",
      "Split data 80/20 with stratified sampling to preserve class distribution",
      "Trained Logistic Regression, Decision Tree, Random Forest, and KNN classifiers",
      "Set classification threshold to 0.4 to prioritize recall for injury detection",
      "Evaluated using accuracy, precision, recall, F1 score, and ROC AUC",
      "Used 5-fold cross validation to assess model stability",
    ],
    image: "/images/ny-collisions-injury-prediction.webp",
    link: "/projects/nyc_collisions_injury_prediction.html",
    githubUrl: "https://github.com/atleenjose/nyc-collision-injury-prediction",
    attachments: [
      { name: "GitHub Repository", url: "https://github.com/atleenjose/nyc-collision-injury-prediction" },
      { name: "Predicting Injury Outcomes in NYC Motor Vehicle Collisions (Interactive Notebook)", url: "/projects/nyc_collisions_injury_prediction.html" },
      { name: "Dataset Excel", url: "/projects/Motor Vehicle Collisions Crashes Dataset.xlsx" },
    ],
    keyLearnings: [
      "Random Forest achieved strongest ROC AUC (0.70) and recall of 0.92 for injury cases.",
      "Decision Tree had highest recall (0.98) but lowest precision - flagging almost everything as injury.",
      "Logistic Regression was most stable across cross-validation folds with F1 of 0.62.",
      "Lowering classification threshold to 0.4 improved recall but reduced precision across all models.",
      "Administrative crash data lacks key injury predictors - speed, seatbelt use, impact angle.",
      "Learned that in public safety contexts, recall matters more than accuracy.",
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
            <Link href="/data-ml-projects" className="text-sm text-gray-500 hover:text-white transition">
              ← Data & ML Projects
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
          {project.image2 && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-white/10">
              <img src={project.image2} alt={project.title} className="w-full object-cover" />
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
        {project.live_demo && (
          <a
            href={project.live_demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-4 py-2 transition mb-8"
          >
            {/* API / Terminal Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75L3.75 12l4.5 5.25M15.75 6.75L20.25 12l-4.5 5.25"
              />
            </svg>

            Explore the API
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
