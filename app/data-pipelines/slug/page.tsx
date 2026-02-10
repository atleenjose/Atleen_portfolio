import { notFound } from "next/navigation";

type Project = {
  title: string;
  description: string;
  dataPipeline: string[];
  image?: string;
  link?: string;
};

const projects: Record<string, Project> = {
  "chatbot-knn": {
    title: "Predicting Chatbot Conversation Cost with KNN",
    description: `
Worked as an AI Engineer specializing in NLP and LLMs to estimate the cost of chatbot conversations.
Used KNN regression to predict total conversation cost early, based on first 5 minutes of interaction.
The analysis uses mock data inspired by real chatbot logs to demonstrate approach and reasoning.
    `,
    dataPipeline: [
      "Load mock chatbot conversation dataset",
      "Clean and normalize features",
      "Split dataset into train and test sets",
      "Train KNN regressor and tune neighbors using RMSE",
      "Evaluate predictions on test set",
      "Analyze limitations and potential improvements",
    ],
    image: "/images/chatbot_knn.png",
    link: "/projects/KNN_Chatbot_Price_Pred.html",
  },
  "iris-knn": {
    title: "KNN Classification - Iris Dataset",
    description: "Implemented KNN to classify Iris species.",
    dataPipeline: [
      "Load CSV dataset",
      "Clean missing values",
      "Encode categorical features",
      "Scale numerical features",
      "Train KNN classifier",
      "Evaluate accuracy & confusion matrix",
    ],
    image: "/images/iris_knn.png",
    link: "https://github.com/yourusername/iris-knn",
  },
  // Add more projects here...
};

type Props = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Props) {
  const project = projects[params.slug];
  if (!project) return notFound();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <p className="mb-6 whitespace-pre-line">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Data Pipeline Steps</h2>
      <ol className="list-decimal list-inside mb-6">
        {project.dataPipeline.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-lg"
        >
          View Notebook / Repo
        </a>
      )}
    </div>
  );
}
