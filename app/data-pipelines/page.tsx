// app/data-pipelines/page.tsx
import Link from "next/link";

type Project = {
  title: string;
  slug: string;
  shortDesc: string;
  image?: string;
};

const projects: Project[] = [
  {
    slug: "chatbot-cost-knn",
    title: "Predicting Chatbot Conversation Cost",
    shortDesc: "KNN regression to predict chatbot conversation cost using early interaction signals.",
    image: "/images/chatbot_knn.png",
  },
];

export default function DataPipelinesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Data Pipeline Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/data-pipelines/${project.slug}`}>
            <div className="cursor-pointer rounded-xl shadow-md p-6 hover:shadow-xl transition">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.shortDesc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}