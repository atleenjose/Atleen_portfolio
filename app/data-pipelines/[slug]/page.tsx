// app/data-pipelines/[slug]/page.tsx
import { notFound } from "next/navigation";

type Project = {
  title: string;
  description: string;
  dataPipeline: string[];
  image?: string;
  link?: string;
  attachments?: { name: string; url: string }[];
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
  },
};

type Props = { params: { slug: string } };

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // unwrap if it's a Promise
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
          <h2 className="text-2xl font-semibold mb-2">Attachments</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.attachments.map((file, idx) => (
              <li key={idx}>
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {file.name}
                </a>{" "}
                <span className="text-gray-500 text-sm">
                  {file.name.endsWith(".csv") ? "(Dataset)" : "(Notebook)"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.link && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Interactive Notebook Preview</h2>
          <iframe
  src="/projects/KNN Chatbot Price Pred.html"
  className="w-full h-[600px] border rounded-lg"
  title={project.title}
/>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Key Learnings</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Applied KNN regression to real-world chatbot cost estimation</li>
          <li>Learned importance of feature normalization and early interaction signals</li>
          <li>Understood limitations: outliers, noisy data, rare expensive cases</li>
          <li>Practiced model evaluation using RMSE and predictive reasoning</li>
        </ul>
      </div>
    </div>
  );
}