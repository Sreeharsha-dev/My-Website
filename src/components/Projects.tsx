import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Whisper Hindi ASR Model",
    description: "Automatic Speech Recognition model for Hindi language with WER calculation for Kathbath dataset.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "PyTorch", "ASR", "Deep Learning"],
    github: "https://github.com/Muttamatam-Sreeharsha-0471/ASR_Model"
  },
  {
    id: 2,
    title: "Package OCR System",
    description: "OCR model that detects and standardizes package weights across different units.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    tags: ["OCR", "Computer Vision", "Python"],
    github: "https://github.com/abandonedmonk/Package-Measurement-using-OCR"
  },
  {
    id: 3,
    title: "Packet Details and Tomato Quality Detection",
    description: "Integrated OCR & LLM system for packet detail extraction with quality assessment features.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    tags: ["Streamlit", "GroqAPI", "YOLOv8", "OCR"],
    github: "https://github.com/abandonedmonk/catalyst-crew"
  },
  {
    id: 4,
    title: "Agrestart",
    description: "Agricultural analysis platform for soil quality, leaf disease, and pest detection.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
    tags: ["Computer Vision", "ML", "Real-time Detection"],
    github: "https://github.com/Sreeharsha-dev/Agrestart"
  },
  {
    id: 5,
    title: "Garbage Type Detection",
    description: "Multi-algorithm comparison for garbage classification using 6 different models.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    tags: ["Deep Learning", "CNN", "Classification"],
    github: "https://github.com/Sreeharsha-dev/Garbage-Type-Detection"
  },
  {
    id: 6,
    title: "ISRO Sentiment Analysis",
    description: "Sentiment analysis of Chandrayaan 2 YouTube comments.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["NLP", "Sentiment Analysis", "Python"],
    github: "https://github.com/Sreeharsha-dev/ISRO-Sentimental-Analysis"
  },
  {
    id: 7,
    title: "Job Recommendation System",
    description: "Personalized job recommendations based on user preferences using ML.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Streamlit", "ML", "NLP"],
    github: "https://github.com/Sreeharsha-dev/Job-Recommendation"
  },
  {
    id: 8,
    title: "GitHub Profile Analyzer",
    description: "A Flask-based app that analyzes GitHub profiles, suggests improvements, and rates profiles using GitHub API data.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["Flask", "GitHub API", "Python"],
    github: "https://github.com/Sreeharsha-dev/github-profile-analyzer"
  }  
];

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent">My Projects</h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>

          {/* Projects Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="flex-none w-[400px] snap-center"
              >
                <motion.div
                  className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;