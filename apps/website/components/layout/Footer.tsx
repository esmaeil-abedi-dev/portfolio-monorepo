import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Esmaeil Abedi</h3>
            <p className="text-sm text-gray-300">
              Crafting Intelligent Experiences: Where Robust Front-End Expertise Meets AI Innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-300 hover:text-accent">Home</Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-accent">About</Link>
              <Link href="/projects" className="text-sm text-gray-300 hover:text-accent">Projects</Link>
              <Link href="/blog" className="text-sm text-gray-300 hover:text-accent">Blog</Link>
              <Link href="/cv" className="text-sm text-gray-300 hover:text-accent">CV</Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-accent">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/esmaeilabedi" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/esmaeilabedi" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="mailto:esmaeilabedi1990@gmail.com" className="text-gray-300 hover:text-accent">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Esmaeil Abedi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
