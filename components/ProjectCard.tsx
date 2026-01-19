import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function ProjectCard({ title, description, href }: ProjectCardProps) {
  const content = (
    <div
      className="
        group relative
        bg-neutral-900/60 backdrop-blur
        border border-white/10
        rounded-2xl p-8
        transition-all duration-300
        hover:-translate-y-1 hover:border-white/30
      "
    >
      <h3 className="text-2xl font-medium mb-4 text-gray-100">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* subtle arrow */}
      <div className="mt-6 text-sm text-gray-500 group-hover:text-gray-300 transition">
        Explore →
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
