import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-6">
            Sreeharsha Muttamatam
          </h2>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/Sreeharsha-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sreeharsha-muttamatam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sreeharsha2427@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 rounded-full mb-8" />

          <p className="text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Sreeharsha Muttamatam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;