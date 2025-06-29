import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
  return (
    <section id="projects" className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> 
            {" "}
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Project 1 */}
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2 '> Property Recommendation System </h3>
              <p className='text-gray-400 mb-4'> 
                  Create a recommendation system that selects the top 3 most comparable properties for a given 
                  subject property. The system should analyze a subject property and hundreds of nearby candidates
                  to recommend the best comps. Add an explainability layer that outputs reasoning.
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["ML", "Gradio", "LLM", "Groq"].map((tech, key) => (
                  <span 
                    key={key}
                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex justify-between items-center'>
                <a href='https://github.com/el3136/Property-Recommendation-System' className='text-blue-400 hover:text-blue-300 transition-colors my-4'> 
                  {" "}
                  View Project 
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2 '> AI Voice Assistant </h3>
              <p className='text-gray-400 mb-4'> 
                A web app where users can call and speak to an AI that can answer questions about their account. 
                The AI voice assistant responds quickly and use RAG to follow company guidelines and reference user 
                information to answer questions. Has an admin dashboard that displays analytics of user calls and 
                common questions asked.
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["Next.js", "Typescript", "Cartesia", "Vercel", "OpenAI Whisper", "Groq"].map((tech, key) => (
                  <span 
                    key={key}
                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex justify-between items-center'>
                <a href='https://github.com/el3136/AI_Voice_Assistant' className='text-blue-400 hover:text-blue-300 transition-colors my-4'> 
                  {" "}
                  View Project 
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2 '> Multimodal Video Analysis </h3>
              <p className='text-gray-400 mb-4'> 
                This is an AI video assistant that helps you extract information from YouTube content without
                watching the entire video. It processes video transcripts to create an interactive experience
                where you can ask questions, get summaries, obtain timestamps, and explore the video content
                through a chatbot.
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {["Next.js", "Typescript", "Gemini", "Vercel", "LLM", "Youtube Transcript"].map((tech, key) => (
                  <span 
                    key={key}
                    className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex justify-between items-center'>
                <a href='https://github.com/el3136/Multimodal_Video_Analysis_Week2' className='text-blue-400 hover:text-blue-300 transition-colors my-4'> 
                  {" "}
                  View Project 
                </a>
              </div>
            </div>
            {/* Next Project */}
            

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
