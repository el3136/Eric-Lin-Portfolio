import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
  const frontendSkills = [
    "React", "Next.js", "Redux", "Context API", "React Query",
    "TailwindCSS", "Material UI", "TypeScript", "JavaScript (ES6+)"
  ];
  const backendSkills = [
    "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Firebase",
    "Docker", "AWS (Lambda, EC2, S3)", "GitHub Actions", "Vercel"
  ];
  const tools = [
    "Jest", "React Testing Library", "Cypress", "Postman",
    "Agile / Scrum", "CI/CD", "Test-Driven Development"
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* === SUMMARY === */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full-stack software engineer with 5 years of experience delivering responsive, 
              cloud-based web applications using React, TypeScript, and Node.js. 
              Skilled in frontend architecture and backend integration with REST APIs and 
              cloud databases. Experienced in deploying scalable SaaS and AI-powered platforms 
              with strong collaboration in Agile environments, performance optimization, and CI/CD automation.
            </p>
          </div>

          {/* === SKILLS === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-green-400">Backend & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, i) => (
                  <span key={i} className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <span key={i} className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* === EXPERIENCE === */}
          <div className="mt-12 space-y-8">
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </h3>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h4 className="text-lg font-semibold text-gray-100">
                Software Engineer — Headstarter <span className="text-gray-400">(May 2023 – Present)</span>
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Developed an AI-powered healthcare chatbot in Next.js using OpenAI GPT-4 and Pinecone for RAG-based FAQs.</li>
                <li>Built modular, reusable UI components with Material UI and TailwindCSS.</li>
                <li>Implemented WebSocket live chat for real-time patient interaction with minimal latency.</li>
                <li>Engineered Flashcards feature using Groq API (Llama 3.1) for patient education.</li>
                <li>Optimized caching with React Query + Redux Toolkit, improving data consistency and performance.</li>
                <li>Automated CI/CD with GitHub Actions for Vercel deployments, including testing and linting workflows.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h4 className="text-lg font-semibold text-gray-100">
                Software Engineer — 4Human Corporation <span className="text-gray-400">(Sep 2021 – May 2023)</span>
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Built Murphy E-Commerce Platform with React Hooks, improving mobile UX by 25%.</li>
                <li>Implemented secure JWT authentication and integrated Stripe payment API.</li>
                <li>Created admin dashboard for CRUD product, order, and inventory management.</li>
                <li>Reduced redundant API calls by 30% using React Query + Axios optimization.</li>
                <li>Deployed scalable applications on Vercel with CI/CD pipelines.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h4 className="text-lg font-semibold text-gray-100">
                Software Engineer — Headstarter <span className="text-gray-400">(Sep 2020 – Sep 2021)</span>
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>Developed and deployed serverless APIs using AWS Lambda and DynamoDB (99% uptime).</li>
                <li>Created real-time React dashboards using Context API and Hooks.</li>
                <li>Led 4 developers through Agile sprints with CI/CD and TDD pipelines.</li>
                <li>Mentored junior engineers and collaborated with mentors from Amazon and Bloomberg.</li>
              </ul>
            </div>
          </div>

          {/* === EDUCATION === */}
          <div className="mt-12 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>M.S. in Computer Science (AI Concentration)</strong> — New York University (2023–2025)</li>
              <li><strong>B.S. in Computer Engineering</strong> — New York University (2019–2023)</li>
              <li><strong>Coursework:</strong> Data Structures & Algorithms, Software Engineering, Operating Systems, Computer Architecture, OOP, Machine Learning, AI, Big Data</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
