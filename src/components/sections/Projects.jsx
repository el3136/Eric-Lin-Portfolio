import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Sitting Posture Detection */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition">
              <h3 className="text-xl font-bold mb-2">Sitting Posture Detection (Computer Vision)</h3>
              <p className="text-gray-400 mb-4">
                Built a YOLOv4-based computer vision model to classify sitting posture correctness. 
                Annotated and preprocessed 320 images using ffmpeg. Achieved 90% mAP@50 and 70% mAP@[50:95] 
                across varied environments for robust detection accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "YOLOv4", "OpenCV", "ffmpeg", "Computer Vision", "ML"].map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2: Sentiment Analysis in Stock Market Prediction */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition">
              <h3 className="text-xl font-bold mb-2">Sentiment Analysis in Stock Market Prediction</h3>
              <p className="text-gray-400 mb-4">
                Conducted sentiment analysis on 10-Q reports, NYT articles, and Reddit posts using Python NLP libraries. 
                Trained Logistic Regression, Random Forest, and XGBoost models on engineered sentiment features to predict Nasdaq trends, 
                improving model accuracy by 20%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "NLP", "Pandas", "XGBoost", "Random Forest", "Matplotlib"].map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3: Easy Getaways */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition">
              <h3 className="text-xl font-bold mb-2">Easy Getaways (Full-Stack Mobile App)</h3>
              <p className="text-gray-400 mb-4">
                Developed a React Native travel app with Firebase backend for personalized itineraries. 
                Integrated Google Maps API for nearby attraction recommendations and Firestore for data persistence, 
                supporting CRUD itinerary management and cross-device sync.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Firebase", "Google Maps API", "Firestore", "JavaScript"].map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
