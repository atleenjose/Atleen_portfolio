"use client";
import Link from "next/link";

type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Predicting Chatbot Conversation Cost with KNN",
    slug: "chatbot-knn",
    shortDescription: "Estimate chatbot conversation costs using KNN regression on early interactions.",
    image: "/images/chatbot_knn.png",
  },
  {
    title: "KNN Regression - Housing Prices",
    slug: "housing-knn",
    shortDescription: "Predict housing prices using KNN regression with normalized features and RMSE tuning.",
    image: "/images/housing_knn.png",
  },
  {
    title: "Customer Churn Prediction with KNN",
    slug: "churn-knn",
    shortDescription: "Predict customer churn using KNN with normalized features and distance-based classification.",
    image: "/images/churn_knn.png",
  },
];

export default function DataPipelinesHub() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Data Pipeline Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/data-pipelines/${project.slug}`}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center bg-white"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 w-full h-48 object-cover rounded"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
