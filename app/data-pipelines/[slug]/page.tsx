// app/data-pipelines/[slug]/page.tsx
import { notFound } from "next/navigation";

type Project = {
  title: string;
  description: string;
  dataPipeline: string[];
  image?: string;
  link?: string;
  attachments?: { name: string; url: string }[];
  keyLearnings?: string[];
};

const projects: Record<string, Project> = {
  "chatbot-cost-knn": {
    title: "Predicting Chatbot Conversation Cost",
    description: `
Worked as an AI and backend Engineer specializing in NLP and LLMs to estimate the cost of chatbot conversations.
Used KNN regression to predict total conversation cost early, based on first 5 minutes of interaction.

Key points:
- Mock dataset inspired by real chatbot logs
- X variables: messages, tokens, average tokens per message, model tier, subscription tier
- Y variable: total conversation cost in USD
- Features normalized since KNN is distance-based
- Model tuned using RMSE; limitations: noise sensitivity, outliers, rare expensive cases
    `,
    dataPipeline: [
      "Load mock chatbot conversation dataset (CSV)",
      "Clean and normalize features",
      "Split dataset into train and test sets",
      "Train KNN regressor and tune neighbors using RMSE",
      "Evaluate predictions on test set",
      "Analyze limitations and potential improvements",
    ],
    image: "/images/chatbot_knn.png",
    link: "/projects/KNN Chatbot Price Pred.html",
    attachments: [
      { name: "KNN Chatbot Price Pred.html", url: "/projects/KNN Chatbot Price Pred.html" },
      { name: "Chatbot Pricing Data - KNN Data.csv", url: "/projects/Chatbot_Pricing_Data_KNN.csv" },
    ],
    keyLearnings: [
      "Applied KNN regression to predict chatbot conversation cost using early interaction signals.",
      "Learned importance of feature normalization and early feature selection.",
      "Recognized limitations: outliers, noisy data, rare expensive cases.",
      "Potential improvements: try tree-based models, increase dataset size, include more features for better accuracy."
    ],
  },
  "chatbot-satisfaction-classification": {
    title: "Predicting Chatbot Conversation Success",
    description: `
Worked as an AI and backend engineer to analyze and predict user satisfaction in chatbot conversations.
Used KNN, Logistic Regression, LDA, and QDA to classify early whether a conversation would succeed or fail, based on behavioral and system features from the first few minutes.

Key points:
- Mock dataset inspired by real chatbot logs with ~700 conversations
- X variables: message count, tokens, average tokens per message, model tier, user tier, response time, engagement intensity, model-user interaction, question type
- Y variable: conversation_success (0 = failed / dissatisfied, 1 = successful / satisfied)
- Features normalized and categorical features one-hot encoded for distance-based and linear models
- KNN tuned for neighbors, Logistic Regression / LDA / QDA evaluated for linear/nonlinear separation
- Limitations: class imbalance, small sample size, features without text embeddings, low recall for minority class
    `,
    dataPipeline: [
      "Load mock chatbot conversation dataset (CSV)",
      "Clean and normalize numeric features; encode categorical features",
      "Engineer additional features: cost per message, engagement intensity, model-user interaction, response time",
      "Split dataset into train and test sets (80/20) with stratification",
      "Train and evaluate KNN, Logistic Regression, LDA, and QDA classifiers",
      "Visualize confusion matrices and calculate precision, recall, and F1-score",
      "Analyze model performance, limitations, and potential improvements for deployment"
    ],
    image: "/images/classification.png",
    link: "/projects/Predict Conversation Success Satisfaction.html",
    attachments: [
      { name: "Chatbot Conversation Success - Classification.html", url: "/projects/Predict Conversation Success Satisfaction.html" },
      { name: "Chatbot Conversation Data - Classification.csv", url: "/projects/Chatbot_Conversation_Data.csv" }
    ],
    keyLearnings: [
      "Applied multiple classification models to predict chatbot conversation success.",
      "Learned the importance of handling class imbalance and feature encoding.",
      "Recognized limitations: small dataset, low recall for minority class, missing text embeddings.",
      "Potential improvements: oversampling minority class, include NLP embeddings, tune model hyperparameters, experiment with ensemble models."
    ],
  },
  "ai-knowledge-base-optimization": {
    title: "AI Knowledge Base Optimization with Random Forest",
    description: `
  Analyzed enterprise-style AI support conversations to understand why some user queries succeed while others fail.
  Built a machine learning pipeline using Random Forest to predict query success and identify drivers of knowledge retrieval performance.

  Key points:
  - Mock dataset inspired by real AI support and knowledge base interaction logs (~740 conversations)
  - X variables: message count, tokens, average tokens per message, model tier, user tier, retrieval method, retrieval time, conversation duration, query complexity
  - Y variable: answer_success (0 = failed retrieval / escalation, 1 = successful knowledge base response)
  - Feature engineering included encoding categorical variables and normalizing behavioral signals
  - Random Forest chosen for robustness to nonlinear relationships and feature interactions
  - Model evaluated using confusion matrix, accuracy, and feature importance analysis
  - Insights used to identify knowledge gaps, retrieval inefficiencies, and query complexity challenges
      `,
    dataPipeline: [
      "Load AI knowledge base interaction dataset",
      "Clean dataset and encode categorical variables (query category, retrieval method, model tier)",
      "Engineer behavioral features such as conversation duration and query complexity encoding",
      "Split dataset into training and testing sets",
      "Train Random Forest classifier to predict query success",
      "Evaluate model performance using confusion matrix and classification metrics",
      "Analyze feature importance to identify factors affecting AI retrieval success",
      "Perform exploratory analysis on query categories, knowledge article effectiveness, and escalation patterns"
    ],
    image: "/images/knowledge_optimization.png",
    link: "/projects/rf-knowledge-base-optimization.html",
    attachments: [
      { name: "rf-knowledge-base-optimization.html", url: "/projects/rf-knowledge-base-optimization.html" },
      { name: "ai_kb_analysis_dataset.csv", url: "/projects/ai_kb_analysis_dataset.csv" }
    ],
    keyLearnings: [
      "Applied Random Forest models to predict success of AI knowledge base queries.",
      "Learned how conversation features such as query complexity and retrieval method affect success rates.",
      "Used confusion matrix evaluation to identify cases where AI systems incorrectly predict successful retrieval.",
      "Recognized the importance of knowledge article coverage and retrieval strategy in AI support systems.",
      "Potential improvements: add NLP embeddings from query text, apply clustering to detect query patterns, integrate interactive dashboards using Power BI."
    ],
  },
};

type Props = { params: { slug: string } };

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return notFound();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <p className="mb-6 whitespace-pre-line text-gray-700">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Data Pipeline Steps</h2>
      <ol className="list-decimal list-inside mb-6 text-gray-700">
        {project.dataPipeline.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>

      {project.attachments && project.attachments.length > 0 && (
  <div className="mt-6">
    <h2 className="text-2xl font-semibold mb-2">Interactive Notebooks</h2>
    {project.attachments
      .filter((file) => file.name.endsWith(".html"))
      .map((file, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{file.name}</h3>
          <iframe
            src={file.url}
            className="w-full h-[600px] border rounded-lg"
            title={file.name}
          />
        </div>
      ))}
  </div>
)}

      {/* {project.link && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Interactive Notebook Preview</h2>
          <iframe
  src="/projects/KNN Chatbot Price Pred.html"
  className="w-full h-[600px] border rounded-lg"
  title={project.title}
/>
        </div>
      )} */}

      <div className="mt-6">
  <h2 className="text-2xl font-semibold mb-2">Key Learnings & Conclusions</h2>
  <ul className="list-disc list-inside space-y-1 text-gray-700">
    {project.keyLearnings?.map((learning, idx) => (
      <li key={idx}>{learning}</li>
    ))}
  </ul>
</div>
    </div>
  );
}