import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const projects = {
  1: {
    title: "Whisper Hindi ASR Model",
    description: "An advanced Automatic Speech Recognition (ASR) model specifically designed for the Hindi language. This project implements the Whisper architecture and includes WER (Word Error Rate) calculation for the Kathbath dataset, providing accurate transcription capabilities for Hindi speech.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "PyTorch", "Whisper", "Transformers", "Speech Processing"],
    features: [
      "Hindi speech recognition using Whisper architecture",
      "WER calculation for Kathbath dataset",
      "Custom training pipeline",
      "Performance optimization",
      "Comprehensive evaluation metrics",
      "Easy-to-use inference interface"
    ],
    github: "https://github.com/Muttamatam-Sreeharsha-0471/ASR_Model"
  },
  2: {
    title: "Package OCR System",
    description: "An innovative OCR system that automatically detects and standardizes package weights across different units of measurement. The system provides accurate conversion and standardization of measurements, making it ideal for inventory and logistics applications.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "OCR", "OpenCV", "TensorFlow", "Unit Conversion"],
    features: [
      "Automatic weight detection from package images",
      "Multi-unit conversion system",
      "High accuracy OCR implementation",
      "Real-time processing capabilities",
      "Standardized output format",
      "Error handling and validation"
    ],
    github: "https://github.com/abandonedmonk/Package-Measurement-using-OCR"
  },
  3: {
    title: "Packet Details and Tomato Quality Detection",
    description: "A comprehensive web application that combines OCR technology with LLM capabilities for advanced packet analysis. The system includes quality assessment features and report generation functionality, making it a powerful tool for product analysis.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    technologies: ["Streamlit", "GroqAPI", "YOLOv8", "OCR", "Python", "LLM"],
    features: [
      "Integrated OCR for packet detail extraction",
      "LLM-powered analysis and insights",
      "Tomato freshness assessment",
      "Automated report generation",
      "User-friendly Streamlit interface",
      "Real-time processing capabilities"
    ],
    github: "https://github.com/abandonedmonk/catalyst-crew"
  },
  4: {
    title: "Agrestart",
    description: "A comprehensive agricultural analysis platform that provides multiple detection and analysis capabilities for farming applications. The system supports various input methods and provides real-time analysis for agricultural needs.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Deep Learning", "Computer Vision", "Real-time Processing"],
    features: [
      "Soil quality analysis",
      "Leaf disease detection",
      "Pest detection system",
      "Multiple input methods (image/video/live)",
      "Real-time preview functionality",
      "Comprehensive analysis reports"
    ],
    github: "https://github.com/Sreeharsha-dev/Agrestart"
  },
  5: {
    title: "Garbage Type Detection",
    description: "A comparative study and implementation of multiple deep learning algorithms for garbage classification. The project evaluates and compares the performance of six different architectures to determine the most effective approach.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Deep Learning", "Xception", "EfficientNet", "VGG16", "PNASNet", "MobileNetV2", "CNN"],
    features: [
      "Implementation of 6 different algorithms",
      "Comparative performance analysis",
      "Accuracy metrics for each model",
      "Optimized model selection",
      "Easy-to-use interface",
      "Comprehensive documentation"
    ],
    github: "https://github.com/Sreeharsha-dev/Garbage-Type-Detection"
  },
  6: {
    title: "ISRO Sentiment Analysis",
    description: "A sentiment analysis project focusing on YouTube comments related to ISRO's Chandrayaan 2 mission. The project provides insights into public opinion and sentiment regarding this significant space mission.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "NLP", "Sentiment Analysis", "Machine Learning"],
    features: [
      "YouTube comment extraction",
      "Sentiment classification",
      "Trend analysis",
      "Visualization of results",
      "Statistical analysis",
      "Comprehensive reporting"
    ],
    github: "https://github.com/Sreeharsha-dev/ISRO-Sentimental-Analysis"
  },
  7: {
    title: "Job Recommendation System",
    description: "An intelligent job recommendation system that uses machine learning to match users with relevant job opportunities based on their preferences and requirements. The system provides personalized recommendations using advanced NLP techniques.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Streamlit", "NLP", "TF-IDF", "Machine Learning"],
    features: [
      "Personalized job recommendations",
      "User preference analysis",
      "TF-IDF based matching",
      "Interactive Streamlit interface",
      "Efficient job search",
      "Real-time updates"
    ],
    github: "https://github.com/Sreeharsha-dev/Job-Recommendation"
  },
  8: {
    title: "GitHub Profile Analyzer",
    description: "A Flask-based application that analyzes GitHub profiles, provides improvement suggestions, and rates profiles based on various factors.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    technologies: ["Flask", "GitHub API", "Python", "HTML", "CSS"],
    features: [
      "Profile analysis using GitHub API data",
      "Improvement suggestions for GitHub profiles",
      "Profile rating based on key factors",
      "Detailed feedback and recommendations"
    ],
    github: "https://github.com/Sreeharsha-dev/github-profile-analyzer"
  }
  
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[Number(id)];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen pt-20 pb-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-primary">
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
              {project.title}
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Key Features</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Technologies</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/20 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Links</h2>
              <div className="flex flex-col gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;