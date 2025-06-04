import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
  const frontendSkills = ["React", "Vue", "Typescript", "Javascript", "TailWindCSS"];
  const backendSkills = ["Node.js", "Python", "AWS", "GCP", "PostgreSQL", "MongoDB"];

  return (
    <section id="about" className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            {" "}
            About Me
          </h2>

          <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
              Passionate web developer with expertise in building scalable web applications and testing innovative solutions.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {frontendSkills.map((tech, key) => (
                    <span 
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                <div className='flex flex-wrap gap-2'>
                  {backendSkills.map((tech, key) => (
                    <span 
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 '> 📖 Education </h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong> M.S. in Computer Science with AI Concentration </strong> - New York University (2023-2025)
                </li>
                <li>
                  <strong> B.S. in Computer Engineering </strong> - New York University (2019-2023)
                </li>
                <li>
                  <strong> Relevant Coursework: Data Structures and Algorithms, Software Engineering, 
                    Operating Systems, Computer Architecture, Object Oriented Programming, Fundamental Algorithms, 
                    Machine Learning, Artificial Intelligence, Big Data ...</strong>
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 '> 💼 Work Experience </h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4> Software Engineer Resident at Headstarter (2024-Present) </h4>
                  <p> Developed and maintained cloud-based full-stack projects in fast-paced software team environments. </p>
                  <p> Implemented llm-chaining, hyperparameter tuning, fine tuning on 10+ LLM models controlling for latency & accuracy. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
