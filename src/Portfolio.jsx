import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Award,
  Code2,
  ExternalLink,
  Maximize2,
  X,
  Layers,
  Cpu,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const featuredProjects = [
  {
    key: "findiscrit",
    title: "Findiscrit · One-Click Trading Platform",
    description:
      "Developed a web-based trading platform that enables one-click order execution, portfolio monitoring, and seamless integration with multiple broker APIs for a streamlined trading experience.",
    tags: ["React", "Tailwind CSS", "Broker APIs"],
    imageSrc: "findiscrit.png",
    url: "https://findiscrit.in",
  },
  {
    key: "fincopy",
    title: "Fincopy · Trade Copying Platform",
    description:
      "Built a real-time trade copying solution that synchronizes orders between master and follower accounts with low latency, customizable risk settings, and reliable execution.",
    tags: ["Node.js", "WebSockets", "Trade Replication"],
    imageSrc: "fincopy.png",
    url: "https://fincopy.in",
  },
  {
    key: "fintarget",
    title: "Fintarget · Algorithmic Trading Platform",
    description:
      "Engineered features for an algorithmic trading platform, including strategy automation, target-based execution, and scalable backend services capable of processing high-frequency trading events.",
    tags: ["Microservices", "Kafka", "Algorithmic Trading"],
    imageSrc: "fintarget.png",
    url: "https://fintarget.in",
  },
  {
    key: "firstock-algo",
    title: "Firstock Algo · Strategy Automation",
    description:
      "Developed and optimized backend services for Firstock's algorithmic trading ecosystem, focusing on fast order execution, broker API integration, and scalable event-driven architecture.",
    tags: ["Golang", "NATS", "Low-Latency Systems"],
    imageSrc: "firstock-algo.png",
    url: "https://app.firstock.in",
  },
];

const experienceTimeline = [
  {
    period: "DEC 2025 — JUN 2026",
    role: "Software Development Engineer",
    company: "Mindorigin",
    highlights: [
      "Developed scalable backend services in Golang for distributed systems.",
      "Built event-driven microservices using Kafka and NATS for real-time asynchronous communication.",
      "Participated in architecture design for low-latency, high-throughput backend services.",
      "Improved inter-service communication, performance, and system reliability.",
    ],
    tech: ["Go", "Kafka", "NATS", "Redis", "Docker", "gRPC", "Elasticsearch", "Prometheus", "Grafana", "FluentD"],
  },
  {
    period: "NOV 2023 — DEC 2025",
    role: "Software Development Engineer I",
    company: "Algowiz",
    highlights: [
      "Designed and developed backend services for Fintarget, Fincopy, and Findiscrite trading platforms.",
      "Built APIs powering automated and custom trading strategies with low-latency execution.",
      "Developed trade-mirroring infrastructure supporting multi-account replication in real time.",
      "Contributed to architecture decisions for scalable microservices and event-driven systems.",
      "Optimized React applications handling high-frequency live market data (LTP).",
    ],
    tech: ["Node.js", "Express", "React", "MongoDB", "Redis", "WebSocket", "Go", "Redpanda", "Protobuf", "AWS"],
  },
  {
    period: "NOV 2022 — OCT 2023",
    role: "Backend Developer",
    company: "FunctionUp",
    highlights: [
      "Built full-stack MERN applications for real-world business use cases.",
      "Developed RESTful APIs using Node.js, Express, and MongoDB.",
      "Designed scalable backend modules with optimized database queries.",
      "Collaborated with cross-functional teams to deliver production-ready features.",
      "Mentored students in JavaScript and Data Structures & Algorithms (DSA) through live coding sessions, doubt resolution, and code reviews.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "React", "REST API"],
  },
];

const techStack = [
  "Golang",
  "Node.js",
  "Express.js",
  "Fastify",
  "React.js",
  "MongoDB",
  "Redis Cache",
  "Kafka",
  "Redpanda",
  "NATS",
  "RabbitMQ",
  "Websocket",
  "gRPC",
  "AWS",
  "Lambda",
  "Route53",
  "S3",
  "Docker",
  "Elasticsearch",
  "Grafana",
  "Prometheus",
  "PostgreSQL",
  "FluentD",
];

const panelStyles =
  "glass-panel shadow-panel border border-slate-800/60 rounded-3xl transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1";

const SectionHeading = ({ icon: Icon, title, description }) => (
  <div>
    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
      <Icon className="w-4 h-4 text-blue-500" /> {title}
    </h3>
    {description ? (
      <p className="text-slate-400 text-sm max-w-xl">{description}</p>
    ) : null}
  </div>
);

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState(null);

  const activeProject = featuredProjects.find(
    (project) => project.key === activeModal,
  );

  const openModal = (projectKey) => setActiveModal(projectKey);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-blue-500/20 selection:text-blue-300 antialiased relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.12),transparent_18%)] pointer-events-none" />

      <header className="sticky top-0 z-40 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="font-mono text-base font-bold tracking-tight text-white">
            PURU<span className="text-blue-500">.NAIK</span>
          </span>
          <div className="flex items-center gap-6 text-xs font-semibold tracking-wide text-slate-400">
            <a
              href="#projects"
              className="hover:text-white transition-colors uppercase"
            >
              Work Gallery
            </a>
            <a
              href="#work"
              className="hover:text-white transition-colors uppercase"
            >
              Experience
            </a>
            <a
              href="mailto:purunaik2000@gmail.com"
              className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg shadow-blue-500/10 hover:bg-blue-500 transition-all"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div
          className={`${panelStyles} md:col-span-2 p-8 flex flex-col justify-between space-y-8`}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400 w-fit animate-slow-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Backend-Heavy Full Stack Engineer
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building high-throughput,
              <span className="block bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                distributed systems.
              </span>
            </h1>
            <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
              I specialize in low-latency microservices, event-driven pipelines,
              and high-frequency real-time execution layers. Actively building
              robust infrastructures with <strong>Node.js</strong>,{" "} <strong>Golang</strong>,{" "}
              <strong>React</strong>, and modern message brokers.
            </p>
          </div>
          

          <div className="flex flex-wrap gap-6 text-xs text-slate-400 pt-4 border-t border-slate-900">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Sarangarh, C.G., India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-500" />
              <span>purunaik2000@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-500" />
              <span>+91 7828668366</span>
            </div>
          </div>
        </div>

        <div className={`${panelStyles} p-6 flex flex-col justify-between`}>
          <SectionHeading
            icon={Cpu}
            title="Algorithms & Verification"
            description={null}
          />
          <div className="space-y-3 mt-2">
            <a
              href="https://leetcode.com/purunaik2000"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-slate-800/40 rounded-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-500" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Guardian Badge
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      LeetCode Competitive Pool
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono font-semibold">
                  Top Tier
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/purunaik2000"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-slate-800/40 rounded-xl">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white">4★ Coder</h4>
                    <p className="text-[11px] text-slate-500">
                      GeeksforGeeks Profile
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-mono font-semibold">
                  Verified
                </span>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-6 mt-6 border-t border-slate-900">
            {["Node", "Golang", "React"].map((label) => (
              <div key={label}>
                <div className="text-base font-bold text-white">{label}</div>
                <div className="text-[9px] uppercase tracking-wider text-slate-500">
                  {label === "Golang"
                    ? "Systems"
                    : label === "Node.js"
                      ? "Backend"
                      : "Frontend"}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="projects"
          className={`${panelStyles} md:col-span-3 p-8 space-y-6`}
        >
          <SectionHeading
            icon={Layers}
            title="Featured Web Applications"
            description={`Production modules built for automated high-frequency trading. Click "Zoom View" to preview layout systems.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {featuredProjects.map((project) => (
              <div
                key={project.key}
                className="group glass-panel overflow-hidden rounded-2xl border border-slate-800/50 hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="relative w-full h-48 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-900">
                  <div className="absolute inset-0 bg-slate-950/55 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-10 duration-200">
                    <button
                      onClick={() => openModal(project.key)}
                      className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-transform transform translate-y-2 group-hover:translate-y-0"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      Zoom View
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          project.url,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-transform transform translate-y-2 group-hover:translate-y-0"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                      Visit Site
                    </button>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-b from-slate-900 to-slate-950 p-4 text-center select-none">
                    <div className="w-10 h-10 rounded-full bg-slate-800/60 flex items-center justify-center mb-2 text-slate-500">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {project.imageSrc}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1 max-w-50">
                      Unable to load image
                    </span>
                  </div>

                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="work" className={`${panelStyles} md:col-span-3 p-8 space-y-6`}>
          <SectionHeading
            icon={Briefcase}
            title="Production Experience"
            description={null}
          />

          <div className="relative border-l border-slate-800 ml-2">
            {experienceTimeline.map((item) => (
              <div key={item.period} className="relative pl-8 pb-10">
                {/* Timeline Dot */}
                <div className="absolute -left-2.25 top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-500 " />

                {/* Period */}
                <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                  {item.period}
                </span>

                {/* Card */}
                <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-950/50 hover:shadow-xl hover:shadow-blue-500/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.role}
                      </h3>

                      <p className="text-blue-400 font-medium">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-6"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${panelStyles} md:col-span-2 p-6`}>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Core Architecture Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-slate-950/60 border border-slate-800/60 text-slate-300 rounded-xl text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={`${panelStyles} p-6 flex flex-col justify-between`}>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>SERVERLESS</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <h4 className="text-sm font-bold text-white">
              Serverless API System
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Implemented micro-service triggers deploying AWS Lambda behind API
              Gateway mapping dynamic Mongo payloads cleanly.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 pt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Decoupled Operations
          </div>
        </div>
      </main>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-gray-950/90 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 flex items-center gap-1 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 px-3 py-1.5 rounded-xl text-xs font-semibold transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-200 max-w-full h-112.5 bg-linear-to-b from-slate-900 to-slate-950 rounded-xl flex flex-col items-center justify-center text-center p-8 border border-slate-800/50">
              <Layers className="w-12 h-12 text-slate-600 mb-3" />
              <h3 id="modalTitle" className="text-lg font-bold text-white">
                {activeProject.title}
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-md">
                Unable to load image{" "}
                <strong className="text-white">{activeProject.imageSrc}</strong>
              </p>
            </div>

            <img
              src={activeProject.imageSrc}
              alt={activeProject.title}
              className="absolute inset-8 rounded-xl object-contain h-auto max-h-[calc(85vh-2rem)] pointer-events-none max-w-210 overflow-x-scroll"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      )}

      <footer className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between border-t border-slate-900 text-[10px] font-mono tracking-widest text-slate-600 uppercase mt-12 gap-4">
        <span>&copy; 2026 Purushottam Naik</span>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/purushottam-naik-8a72bb286"
            target="_blank"
            className="hover:text-slate-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/purunaik2000"
            target="_blank"
            className="hover:text-slate-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/purunaik2000"
            target="_blank"
            className="hover:text-slate-400 transition-colors"
          >
            Leetcode
          </a>
        </div>
      </footer>
    </div>
  );
}
