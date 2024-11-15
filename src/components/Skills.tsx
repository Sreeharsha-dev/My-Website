import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Terminal, Layers, Globe, Puzzle } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    title: "Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    skills: [
      "Model Development",
      "Probability & Statistics",
      "Data Preprocessing",
      "Feature Engineering",
      "TensorFlow",
      "Scikit-Learn",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "ASR",
      "OCR"
    ]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["Python", "Java", "C++", "JavaScript", "C"]
  },
  {
    title: "Libraries & Frameworks",
    icon: <Layers className="w-8 h-8" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow","PyTorch","Keras","OpenCV","FastAPI"]
  },
  {
    title: "Data Engineering",
    icon: <Database className="w-8 h-8" />,
    skills: ["MongoDB", "SQL", "ETL", "Data Pipelines"]
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    skills: ["Node.js", "Express.js", "NPM", "HTML", "CSS", "JavaScript", "VSCode"]
  },
  {
    title: "Version Control & Collaboration",
    icon: <Terminal className="w-8 h-8" />,
    skills: ["Git", "GitHub"]
  },
  {
    title: "Software Engineering",
    icon: <Puzzle className="w-8 h-8" />,
    skills: ["Data Structures", "Algorithms", "Software Engineering Principles"]
  }
];

const Skills = () => {
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          My Skills
        </h2>

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

          {/* Skills Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[280px] max-w-xs snap-center"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuously learning and expanding my skill set to stay at the forefront of technology and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
