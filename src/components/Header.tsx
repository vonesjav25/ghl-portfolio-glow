
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          ALVIN<span className="text-foreground">_</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">Work</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </a>
            <a href="mailto:contact@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-secondary py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
