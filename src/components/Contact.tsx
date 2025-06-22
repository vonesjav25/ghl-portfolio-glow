
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary p-4 rounded-lg mb-4">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <a 
                href="mailto:alvinjavelosa@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                alvinjavelosa@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary p-4 rounded-lg mb-4">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <a 
                href="tel:+639165705005" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +63 916 570 5005
              </a>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary p-4 rounded-lg mb-4">
                <MessageSquare className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Social Media</h4>
              <div className="space-y-2">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
