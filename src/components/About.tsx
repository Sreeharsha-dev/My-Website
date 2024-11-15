import React from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Machine Learning",
              description: "Experienced in developing and deploying ML models for real-world applications."
            },
            {
              icon: <Code2 className="w-8 h-8" />,
              title: "Web Development",
              description: "Passionate about creating efficient, scalable solutions using modern technologies and best practices."
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Innovation",
              description: "Always exploring new technologies and methodologies to solve complex problems."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            As a Machine Learning Engineer with a passion for AI and Data Science, I specialize in developing innovative solutions that bridge the gap between complex algorithms and real-world applications. My experience spans from implementing sophisticated ML models to creating intuitive user interfaces that make technology accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;