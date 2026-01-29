"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

interface Project {
  id: number;
  name: string;
  domain: string;
  dates: string;
  shortDesc: string;
  details: string;
  architectureImg?: string;
  architectureNote?: string;
}

export default function AiNlpSystemsPage() {
  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const [selectedIntro, setSelectedIntro] = useState<"whoami" | "how" | null>(null);

  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
const [zoomOrigin, setZoomOrigin] = useState<{ x: number; y: number }>({ x: 50, y: 50 });


  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "ai", text: "This is a placeholder response from the AI chatbot." },
    ]);

    setInput("");
  };

  // Projects
  const [projects] = useState<Project[]>([
    {
        id: 0,
        name: "CEHD - Temple University",
        domain: "Academic Data Analytics",
        dates: "10/2025 – Present",
        shortDesc: "Data analysis and visualization for academic and administrative reporting.",
        details: `
    - Performed data cleaning, validation, and transformation for institutional datasets
    - Created dashboards and reports using Tableau Desktop and Tableau Prep
    - Supported academic and administrative teams with data-driven insights
    - Technologies: Excel, Tableau Desktop, Tableau Prep
        `,
    },
    {
      id: 1,
      name: "Altanfeethi",
      domain: "HR Chatbot",
      dates: "03/2025 – 08/2025",
      shortDesc: "Rasa AI-powered WhatsApp chatbot for HR support.",
      details: `
- Deployed Rasa conversational AI with custom NLU models and advanced context handling
- Developed high-performance Python backend infrastructure
- Integrated WhatsApp Business API
- Technologies: Python, Rasa, Redis
      `,
    architectureImg: "/Altanfeethi.png",
    },
    {
      id: 2,
      name: "Oxylym",
      domain: "Conversational AI",
      dates: "01/2023 – 08/2025",
      shortDesc: "Multilingual AI chatbots on Oxylym platform.",
      details: `
- Built scalable backend supporting web, voice, WhatsApp, Slack, email
- Context-aware AI with real-time human handoff via WebSocket
- Text analysis using NLP; integrated with Elasticsearch & Haystack
- Technologies: Dialogflow CX, OpenAI, Django REST, MySQL, Redis, Docker, Celery, AWS Lambda
      `,
        architectureImg: "/OxylymArch.png",
    },
    {
      id: 3,
      name: "COROB",
      domain: "Analytics Dashboard",
      dates: "10/2022 – 12/2022",
      shortDesc: "Admin dashboard for customer platform management.",
      details: `
- Managed data from Corob Cloud
- PostgreSQL for complex data modeling and queries
- Background task processing with Celery
- Technologies: Django Rest Framework, PostgreSQL, Celery
      `,
    architectureNote: `
This project focused on analytics and reporting workflows rather than a complex distributed system architecture.

Project scope included:
• Aggregating customer usage data from cloud services
• Designing REST APIs for analytics consumption
• PostgreSQL-based data modeling and complex querying
• Background data aggregation and scheduled jobs using Celery
• Delivering actionable insights through an admin dashboard

The primary goal was to provide visibility into platform usage and support operational decision-making.
  `,
    },
    {
      id: 4,
      name: "Structured Data SEO",
      domain: "Data Processing",
      dates: "08/2023 – 09/2023",
      shortDesc: "Ingested query files using web scraping.",
      details: `
- Integrated APIs with database models
- Implemented optimized database schemas
- Technologies: Django Rest Framework, Celery
      `,
    architectureNote: `
This project focused on building a reliable data ingestion and processing pipeline rather than a visual system architecture.

Project scope included:
• File-based ingestion of structured query data
• Web scraping for extracting SEO-related information
• API integration for data enrichment
• Database schema design for efficient storage and retrieval
• Asynchronous task handling using Celery

The primary goal was to ensure scalability, accuracy, and reliability of SEO data processing workflows.
  `,
    },
    {
      id: 5,
      name: "BPA",
      domain: "E-commerce App",
      dates: "01/2022 – 10/2022",
      shortDesc: "Android app for bulk procurement.",
      details: `
- Implemented business logic and database architecture
- Built server-side workflows for bulk ordering and procurement
- Integrated Twilio for communication services
- Technologies: Django REST Framework, Celery, Twilio
      `,
    architectureNote: `
    This project focused primarily on backend business logic and transactional workflows rather than a standalone system architecture.

Key focus areas included:
• Order lifecycle management
• Bulk pricing logic
• Database schema design
• Asynchronous processing using Celery for Itentory updates and order processing
• Communication workflows using Twilio
  `,
    },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      setZoomedImage(null);
    }
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">AI, NLP, Analytics and Data Projects</h1>

        {/* Resume & GitHub */}
      <section className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-6 mb-12">
        <a
          href="/Atleen_Jose_Resume.pdf"
          target="_blank"
          className="w-50 px-8 py-2 bg-white text-gray-900 border border-gray-300
hover:bg-gray-100
 rounded-lg 
           font-mono text-sm uppercase tracking-wider
           hover:bg-black shadow-md hover:shadow-lg 
           transition-all duration-300 flex items-center justify-center"
        >
          View Resume
        </a>
        <a
          href="https://github.com/atleenjose"
          target="_blank"
          className="w-50 px-8 py-2 bg-white text-gray-900 border border-gray-300
hover:bg-gray-100
 rounded-lg 
           font-mono text-sm uppercase tracking-wider
           hover:bg-black shadow-md hover:shadow-lg 
           transition-all duration-300 flex items-center justify-center"
        >
          GitHub Profile
        </a>
      </section>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my professional experience, projects, and skills in Artificial Intelligence and Natural Language Processing, Analytics, Backend Engineering, Data pipelines and Systems.
        </p>
      </section>

    {/* Chatbot Introduction */}
<section className="max-w-2xl mx-auto mb-6 text-center">
  <h2 className="text-3xl font-bold text-gray-900 mb-3">
    Meet <span className="text-gray-800 border-b-2 border-gray-900 animate-pulse">BurgerAI</span> 🤖
  </h2>

  {/* Buttons */}
  <section className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-6 mb-12">
    <button
      onClick={() => setSelectedIntro("whoami")}
      className="w-50 px-8 py-2 bg-white text-gray-900 border border-gray-300
hover:bg-gray-100
 rounded-lg 
           font-mono text-sm uppercase tracking-wider
           hover:bg-black shadow-md hover:shadow-lg 
           transition-all duration-300 flex items-center justify-center"
        >
      Who am I
    </button>
    <button
      onClick={() => setSelectedIntro("how")}
      className="w-50 px-8 py-2 bg-white text-gray-900 border border-gray-300
hover:bg-gray-100
 rounded-lg 
           font-mono text-sm uppercase tracking-wider
           hover:bg-black shadow-md hover:shadow-lg 
           transition-all duration-300 flex items-center justify-center"
        >
      How I am Made
    </button>
  </section>
</section>

{/* Intro Modal */}
{selectedIntro && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl max-w-xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
      <button
  onClick={() => {
setSelectedIntro(null);
  setSelectedProject(null);
  setZoomedImage(null); 
}}

  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-2xl"
>
  ×
</button>


      {selectedIntro === "whoami" && (
        <>
          <h3 className="text-2xl font-bold mb-2">Who am I?</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            I am an interactive AI assistant that Atleen built to showcase her AI & NLP expertise. I am named after Atleen's first dog 🐶. Atleen always wanted to name something after Burger, and so this AI chatbot helps you ask questions about Atleen.  
            You can ask anything about Atleen's experience, projects, or professional journey. I know a lot about Atleen!
          </p>
          <div className="mt-4 h-100 bg-gray-100 flex items-center justify-center rounded text-gray-400 text-sm">
            <div className="mt-4">
  <img
    src="/Burger.jpeg"
    alt="Burger Image"
    className="w-full h-auto rounded shadow-md"
  />
</div>
          </div>
        </>
      )}

      {selectedIntro === "how" && (
        <>
          <h3 className="text-2xl font-bold mb-2">How I am Made</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            BurgerAI is built using a combination of technologies and pipelines to answer your questions intelligently:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Answers from a <span className="font-semibold">CSV file of predefined questions & answers</span></li>
            <li>If no answer found, queries go to <span className="font-semibold">Ollama</span> with context from my resume document</li>
            <li>Architecture: React + Next.js frontend, Tailwind CSS for UI, modal-based interaction, state-managed with React hooks</li>
            <li>Designed for an interactive, portfolio-friendly experience</li>
          </ul>

          <div className="mt-4 h-200 bg-gray-100 flex items-center justify-center rounded text-gray-400 text-sm">
            <div className="mt-4">
  <img
    src="/BurgerAI Arch.png"
    alt="BurgerAI Architecture"
    className="w-full h-auto rounded shadow-md"
  />
</div>
          </div>
        </>
      )}
    </div>
  </div>
)}


      {/* Chatbot */}
      <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Ask BurgerAI</h2>
        <div className="flex flex-col gap-2 h-60 overflow-y-auto mb-3 border border-gray-300 p-3 rounded bg-gray-50">
          {messages.length === 0 && (
            <p className="text-gray-400 text-center mt-20 text-sm">
              Ask about me here...
            </p>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md max-w-[70%] text-sm ${
                msg.sender === "user"
                  ? "bg-gray-900 text-white self-end"
                  : "bg-gray-200 text-gray-900 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
            placeholder="Ask about my professional experiences..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-3 py-1 bg-gray-900 text-white rounded hover:bg-black text-sm font-semibold transition-all duration-300"
          >
            Send
          </button>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-1 text-gray-900">{project.name}</h3>
              <p className="text-gray-500 text-base mb-1">{project.domain}</p>
              <p className="text-gray-400 text-sm mb-4">{project.dates}</p>
              <p className="text-gray-700 text-lg mb-6">{project.shortDesc}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-black font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
  onClick={() => setSelectedProject(null)}
>
          <div
  className="bg-white rounded-2xl max-w-xl w-full p-8 relative shadow-2xl transform transition-transform duration-300 scale-95 animate-scaleUp overflow-y-auto max-h-[90vh]"
  onClick={(e) => e.stopPropagation()}
>

            <button
  onClick={() => {
    setSelectedProject(null);
    setZoomedImage(null);
  }}
  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-2xl"
>
  ×
</button>

            <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
            <p className="text-gray-500 text-base mb-2">{selectedProject.domain}</p>
            <p className="text-gray-400 text-sm mb-4">{selectedProject.dates}</p>
            <pre className="text-gray-700 text-base whitespace-pre-wrap leading-relaxed">{selectedProject.details}</pre>
            {selectedProject.architectureImg ? (
  <div className="mt-6">
    <h4 className="text-sm font-semibold text-gray-500 mb-2">
      Architecture Diagram
    </h4>
<img
  src={selectedProject.architectureImg}
  alt={`${selectedProject.name} architecture`}
  className={`w-full rounded-lg shadow-md border cursor-zoom-in transition-transform hover:scale-[1.01]`}
  onClick={(e) => {
    const rect = (e.target as HTMLImageElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomOrigin({ x, y });
    setZoomedImage(selectedProject.architectureImg ?? null);
  }}
/>

  </div>
) : selectedProject.architectureNote ? (
  <div className="mt-6">
    <h4 className="text-sm font-semibold text-gray-500 mb-4">
      Project Focus
    </h4>
    <pre className="text-gray-700 text-base whitespace-pre-wrap leading-relaxed">
      {selectedProject.architectureNote}
    </pre>
  </div>
) : (
  <p className="mt-6 text-sm text-gray-500 italic">
    This project focused on analytics and reporting rather than system architecture.
  </p>
)}

    {/* Zoomed Image Modal */}
{zoomedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 z-[60] flex items-center justify-center cursor-zoom-out"
    onClick={() => setZoomedImage(null)}
  >
    <img
      src={zoomedImage}
      alt="Zoomed architecture"
      className="max-w-[95vw] max-h-[95vh] rounded-lg shadow-2xl"
      style={{
        transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
        transform: "scale(2)", // adjust scale as needed
      }}
      onClick={(e) => setZoomedImage(null)}
    />
  </div>
)}


          </div>
        </div>
      )}

      {/* Back Button */}
      <section className="max-w-4xl mx-auto mt-10 text-center">
        <Link href="/">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Back to Home
          </button>
        </Link>
      </section>
    </main>
  );
}



