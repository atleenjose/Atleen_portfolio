import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string; // optional for clickable projects
}

export default function ProjectCard({ title, description, href }: ProjectCardProps) {
  const content = (
    <div className="border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition cursor-pointer">
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );

  return href ? (
    <Link href={href}>{content}</Link>
  ) : (
    content
  );
}
