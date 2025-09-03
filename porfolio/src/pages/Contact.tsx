import Layout from '@/components/Layout';
import { Mail, MapPin, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold mb-8 text-foreground">Contact</h1>
        
        <div className="space-y-8">
          <div className="text-lg text-muted-foreground">
            I'm always interested in discussing new ideas, potential collaborations, 
            or opportunities in AI research and development. Feel free to reach out!
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">Email</div>
                <a href="mailto:ab6105@columbia.edu" className="link-primary">
                  ab6105@columbia.edu
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">Location</div>
                <div className="text-muted-foreground">New York City | Chennai, India</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
              <Github className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">GitHub</div>
                <a href="https://github.com/Aaryaman3" className="link-primary">
                  github.com/Aaryaman3
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">LinkedIn</div>
                <a href="https://linkedin.com/in/aaryaman-bajaj" className="link-primary">
                  linkedin.com/in/aaryaman-bajaj
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
              <FileText className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">Resume</div>
                <a href="/resume.pdf" className="link-primary">
                  Download PDF
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-border">
            <h2 className="text-lg font-medium mb-4 text-foreground">Response Time</h2>
            <p className="text-muted-foreground">
              I typically respond to emails within 24-48 hours. For urgent matters, 
              please indicate so in your subject line.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;