import { Metadata } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Esmaeil Abedi",
  description: "Learn more about Esmaeil Abedi, my journey, skills, and experiences as a Front-End Engineer and AI enthusiast.",
};

export default function AboutPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#1A2B40] mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know my background, skills, and the journey that shaped my career as a Front-End Engineer with a passion for AI.
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Profile Image */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-80 w-full md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/profile.jpg" 
                alt="Esmaeil Abedi" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-[#1A2B40] mb-4">
              Esmaeil Abedi
            </h2>
            <h3 className="text-xl text-accent mb-6">
              Front-End Engineer & AI Enthusiast
            </h3>
            <div className="space-y-4 text-foreground">
              <p>
                Hello there! I&apos;m Esmaeil, a passionate Front-End Engineer with a deep interest in AI technologies. With over 8 years of experience in web development, I specialize in creating responsive, accessible, and visually appealing user interfaces that deliver exceptional user experiences.
              </p>
              <p>
                My journey began with a degree in Computer Science, followed by years of hands-on experience building modern web applications using React, Next.js, TypeScript, and various other front-end technologies. Along the way, I&apos;ve developed a keen interest in artificial intelligence and its applications in web development.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring the latest trends in AI, contributing to open-source projects, or sharing my knowledge through technical articles and community workshops.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/cv">
                <Button variant="outline" size="lg">
                  View My CV
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-3xl font-heading font-bold text-[#1A2B40] mb-10 text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-[#1A2B40] mb-4">
                Frontend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  React, Next.js, Remix
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  TypeScript, JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  HTML5, CSS3, Sass
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Tailwind CSS, Material UI, Chakra UI
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Responsive Design & Accessibility
                </li>
              </ul>
            </motion.div>

            {/* Tools & Testing */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-[#1A2B40] mb-4">
                Tools & Testing
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Git, GitHub, GitLab
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Jest, Testing Library, Cypress
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Webpack, Vite, ESBuild
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  ESLint, Prettier
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  CI/CD (GitHub Actions, Vercel)
                </li>
              </ul>
            </motion.div>

            {/* AI & ML */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-[#1A2B40] mb-4">
                AI & Machine Learning
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Python, TensorFlow, PyTorch
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  OpenAI API Integration
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  NLP & Computer Vision
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Data Visualization
                </li>
                <li className="flex items-center">
                  <span className="bg-accent/10 text-accent rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  ML Model Deployment
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-heading font-bold text-[#1A2B40] mb-10 text-center">
            Professional Journey
          </h2>

          <div className="relative border-l-2 border-accent pl-8 ml-4 space-y-10">
            {/* Job 1 */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-accent bg-background"></div>
              <h3 className="text-xl font-semibold text-[#1A2B40]">Senior Front-End Engineer</h3>
              <p className="text-accent font-medium">TechInnovate Inc. | 2020 - Present</p>
              <p className="mt-2 text-foreground">
                Leading front-end development for enterprise-level React applications, implementing AI-powered features, 
                and mentoring junior developers. Reduced application load time by 40% through performance optimizations and 
                established design system best practices.
              </p>
            </div>

            {/* Job 2 */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-accent bg-background"></div>
              <h3 className="text-xl font-semibold text-[#1A2B40]">Front-End Developer</h3>
              <p className="text-accent font-medium">WebSolutions Co. | 2017 - 2020</p>
              <p className="mt-2 text-foreground">
                Developed responsive web applications using React and TypeScript. Collaborated with design team to implement 
                pixel-perfect UIs and improved website accessibility to meet WCAG standards.
              </p>
            </div>

            {/* Job 3 */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-accent bg-background"></div>
              <h3 className="text-xl font-semibold text-[#1A2B40]">Junior Web Developer</h3>
              <p className="text-accent font-medium">DigiCreative Agency | 2015 - 2017</p>
              <p className="mt-2 text-foreground">
                Started career building websites using HTML, CSS, and JavaScript. Created interactive elements for 
                client websites and assisted in implementing responsive designs for various screen sizes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold text-[#1A2B40] mb-10 text-center">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1A2B40]">M.Sc. Computer Science</h3>
              <p className="text-accent font-medium">University of Technology | 2013 - 2015</p>
              <p className="mt-2 text-foreground">
                Specialized in Artificial Intelligence and Machine Learning, with a thesis on &quot;Integrating Neural Networks 
                with Web Applications for Enhanced User Experiences.&quot;
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#1A2B40]">B.Sc. Computer Engineering</h3>
              <p className="text-accent font-medium">State University | 2009 - 2013</p>
              <p className="mt-2 text-foreground">
                Focused on software development fundamentals, data structures, and algorithms. Completed capstone project 
                on building interactive web applications.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-heading font-semibold text-[#1A2B40] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you&apos;re looking for a Front-End Engineer for your project or want to collaborate on an AI-powered web application, 
            I&apos;d love to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
