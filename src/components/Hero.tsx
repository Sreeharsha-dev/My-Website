import React from 'react';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center text-center md:text-left">
            <div className="relative order-2 md:order-1">
              {/* Animated background elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-xl opacity-70 animate-blob" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-xl opacity-70 animate-blob animation-delay-4000" />
              </div>

              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent animate-title">
                  Sreeharsha Muttamatam
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
                  Machine Learning Engineer & AI Enthusiast
                </h2>
                <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-12 animate-fade-in animation-delay-300 max-w-xl mx-auto md:mx-0">
                  Passionate about leveraging AI and Machine Learning to solve real-world problems.
                  Experienced in developing innovative solutions and conducting research in the field.
                </p>

                <div className="flex items-center justify-center md:justify-start space-x-6 animate-fade-in animation-delay-600">
                  <a href="M_Sreeharsha_MachineLearning_Resume.pdf" download>
                    <button className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center space-x-2 group">
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      <span>Download CV</span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/Sreeharsha-Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sreeharsha-muttamatam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="My_img_2.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
