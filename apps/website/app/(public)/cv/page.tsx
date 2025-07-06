import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "CV | Esmaeil Abedi",
  description: "Professional resume and curriculum vitae of Esmaeil Abedi, Front-End Engineer and AI Enthusiast.",
};

export default function CVPage() {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#1A2B40] mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional background, skills, experience, and education.
          </p>
          <div className="mt-6">
            <Button size="lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download CV (PDF)
            </Button>
          </div>
        </motion.div>

        {/* CV Content */}
        <motion.div 
          className="bg-white shadow-lg rounded-lg overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Personal Information */}
          <div className="bg-primary text-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-4">Esmaeil Abedi</h2>
            <p className="text-xl mb-6">Front-End Engineer & AI Enthusiast</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-90">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@esmaeilabedi.dev</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>San Francisco, California</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                <a href="https://esmaeilabedi.dev" className="hover:underline">esmaeilabedi.dev</a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">Professional Summary</h3>
              <p className="text-foreground">
                Front-End Engineer with 8+ years of experience specializing in building modern, responsive, 
                and accessible web applications. Proficient in React, Next.js, TypeScript, and integrating AI 
                technologies into web interfaces. Strong focus on user experience, performance optimization, 
                and writing clean, maintainable code. Passionate about staying current with emerging web 
                technologies and industry best practices.
              </p>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">Technical Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Front-End Technologies</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      JavaScript (ES6+) & TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      React, Next.js, Remix
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      HTML5, CSS3, Sass
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Tailwind CSS, Material UI, Styled Components
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Redux, Zustand, React Context
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      GraphQL, REST APIs
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">AI & Other Skills</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      TensorFlow.js, OpenAI API
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Python (for ML/AI projects)
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Jest, Testing Library, Cypress
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Git, GitHub Actions
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Docker, CI/CD
                    </li>
                    <li className="flex items-center">
                      <span className="bg-accent/10 text-accent rounded-full p-1 mr-2 inline-flex items-center justify-center h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Figma, Adobe XD (UI/UX)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">Work Experience</h3>

              <div className="space-y-6">
                {/* Job 1 */}
                <div className="border-l-2 border-accent pl-6 relative">
                  <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-2 border-accent bg-background"></div>
                  <h4 className="font-bold text-lg">Senior Front-End Engineer</h4>
                  <p className="text-accent font-medium">TechInnovate Inc. | 2020 - Present</p>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-foreground">
                    <li>
                      Lead front-end development for enterprise-level React applications with TypeScript, 
                      optimizing performance and accessibility.
                    </li>
                    <li>
                      Implemented AI-powered features using TensorFlow.js and OpenAI API, resulting in 30% 
                      increased user engagement.
                    </li>
                    <li>
                      Architected and maintained a component library used across multiple products, improving 
                      development efficiency by 40%.
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews, promoting best practices and quality standards.
                    </li>
                    <li>
                      Collaborated with UX/UI designers to implement pixel-perfect interfaces and seamless user experiences.
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="border-l-2 border-accent pl-6 relative">
                  <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-2 border-accent bg-background"></div>
                  <h4 className="font-bold text-lg">Front-End Developer</h4>
                  <p className="text-accent font-medium">WebSolutions Co. | 2017 - 2020</p>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-foreground">
                    <li>
                      Developed responsive web applications using React and TypeScript for clients across various industries.
                    </li>
                    <li>
                      Improved website accessibility to meet WCAG standards, expanding user reach by 20%.
                    </li>
                    <li>
                      Implemented state management solutions using Redux and Context API for complex application states.
                    </li>
                    <li>
                      Integrated third-party APIs and services, enhancing application functionality and user experience.
                    </li>
                    <li>
                      Contributed to the transition from legacy codebase to modern React architecture, reducing load times by 35%.
                    </li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="border-l-2 border-accent pl-6 relative">
                  <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-2 border-accent bg-background"></div>
                  <h4 className="font-bold text-lg">Junior Web Developer</h4>
                  <p className="text-accent font-medium">DigiCreative Agency | 2015 - 2017</p>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-foreground">
                    <li>
                      Built responsive websites using HTML, CSS, and JavaScript for small to medium-sized businesses.
                    </li>
                    <li>
                      Created interactive UI elements and animations to enhance user engagement.
                    </li>
                    <li>
                      Collaborated with designers to implement pixel-perfect designs across all screen sizes.
                    </li>
                    <li>
                      Maintained and updated existing websites, improving performance and fixing bugs.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">Education</h3>

              <div className="space-y-6">
                {/* Degree 1 */}
                <div className="border-l-2 border-accent pl-6 relative">
                  <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-2 border-accent bg-background"></div>
                  <h4 className="font-bold text-lg">M.Sc. Computer Science</h4>
                  <p className="text-accent font-medium">University of Technology | 2013 - 2015</p>
                  <p className="mt-2 text-foreground">
                    Specialized in Artificial Intelligence and Machine Learning. 
                    Thesis: &quot;Integrating Neural Networks with Web Applications for Enhanced User Experiences&quot;
                  </p>
                </div>

                {/* Degree 2 */}
                <div className="border-l-2 border-accent pl-6 relative">
                  <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-2 border-accent bg-background"></div>
                  <h4 className="font-bold text-lg">B.Sc. Computer Engineering</h4>
                  <p className="text-accent font-medium">State University | 2009 - 2013</p>
                  <p className="mt-2 text-foreground">
                    Focus on software development, data structures, and algorithms. 
                    Completed capstone project on building interactive web applications.
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-2xl font-heading font-bold text-[#1A2B40] mb-4">Certifications</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 border border-gray-200 rounded-md">
                  <span className="bg-accent/10 text-accent rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium">Advanced React & Redux</h4>
                    <p className="text-sm text-muted-foreground">Udemy | 2021</p>
                  </div>
                </div>

                <div className="flex items-center p-3 border border-gray-200 rounded-md">
                  <span className="bg-accent/10 text-accent rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium">TensorFlow Developer Certificate</h4>
                    <p className="text-sm text-muted-foreground">Google | 2022</p>
                  </div>
                </div>

                <div className="flex items-center p-3 border border-gray-200 rounded-md">
                  <span className="bg-accent/10 text-accent rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium">TypeScript Professional</h4>
                    <p className="text-sm text-muted-foreground">Microsoft | 2021</p>
                  </div>
                </div>

                <div className="flex items-center p-3 border border-gray-200 rounded-md">
                  <span className="bg-accent/10 text-accent rounded-full p-1.5 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium">Web Accessibility</h4>
                    <p className="text-sm text-muted-foreground">W3C | 2020</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in my experience? I&apos;d be happy to discuss how I can contribute to your team.
          </p>
          <Link href="/contact">
            <Button>
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
