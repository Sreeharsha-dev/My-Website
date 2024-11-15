import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const professionalExperience = [
  {
    title: "AI/ML Lead",
    company: "Google Developer Group - SIMATS",
    period: "2024 - 2025",
    description: "Led initiatives in building and deploying machine learning models for predictive analytics and computer vision, enhancing the group's technical capabilities and promoting AI/ML projects within the Google Developer Group community.",
    type: "work"
  },
  {
    title: "Machine Learning Engineer",
    company: "Team Infits",
    period: "2024(May) - 2024(October)",
    description: "Led development of ML models for predictive analytics and computer vision applications.",
    type: "work"
  },
  {
    title: "Data Science Intern",
    company: "CodeAlpha",
    period: "2024(April) - 2024(May)",
    description: "Developed and deployed machine learning models for customer segmentation and prediction.",
    type: "work"
  },
  {
    title: "Machine Learning Intern",
    company: "Innovative",
    period: "2024(January) - 2024(March)",
    description: "Completed a project titled 'Enhanced Face and Eye Detection in Real-Time Using Haarcascades in OpenCV', demonstrating proficiency in computer vision techniques and programming skills.",
    type: "work"
  }
];

const academicExperience = [
  {
    title: "Btech. in Artificial Intelligence and Data Science",
    institution: "Saveetha School Of Engineering",
    period: "2021 - 2025",
    description: "Focused on AI, machine learning, and data science, this program combines theory with hands-on projects to build expertise in NLP, computer vision, and big data. Prepares graduates for innovative roles in AI across various industries.",
    type: "education"
  },
  {
    title: "Intermediate Education",
    institution: "Bhashyam Junior College",
    period: "2019 - 2021",
    description: "Focus on Maths, Physics and Chemistry.",
    type: "education"
  },
  {
    title: "High School Education",
    institution: "Bhashyam English Medium high school",
    period: "2018 - 2019",
    description: "Completed foundational education with a focus on mathematics, science, and technology, building a strong base for further studies.",
    type: "education"
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'academic'>('professional');

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</h2>
        
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('professional')}
            className={`px-6 py-3 rounded-full transition-all ${
              activeTab === 'professional'
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'bg-white/5 hover:bg-white/10 text-black dark:text-white'
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={`px-6 py-3 rounded-full transition-all ${
              activeTab === 'academic'
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'bg-white/5 hover:bg-white/10 text-black dark:text-white'
            }`}
          >
            Academic
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VerticalTimeline>
            {(activeTab === 'professional' ? professionalExperience : academicExperience).map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  boxShadow: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.75rem'
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--card-bg)' }}
                date={exp.period}
                iconStyle={{
                  background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
                  color: '#fff'
                }}
                icon={exp.type === 'work' ? <Briefcase /> : <GraduationCap />}
              >
                <h3 className="vertical-timeline-element-title font-bold text-lg text-black dark:text-white">
                  {exp.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-primary mt-2 text-black dark:text-primary">
                  {exp.type === 'work' ? exp.company : exp.institution}
                </h4>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
