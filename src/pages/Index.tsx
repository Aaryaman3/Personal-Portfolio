import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl py-12">
        {/* Hero Section with Photo */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-foreground leading-tight">
              Aaryaman Bajaj
            </h1>
            <h2 className="text-xl text-primary font-medium mb-6">
              Applied AI Researcher | NLP @ Columbia University
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I design and build intelligent systems that work in the real world — from voice-powered 
              assistants to smart surveillance to emergency AI pipelines.
            </p>
            
            <div className="space-y-2 text-muted-foreground mb-8">
              <p><span className="font-medium text-foreground">Currently:</span> MS CS (NLP Track) @ Columbia University</p>
              <p><span className="font-medium text-foreground">Previously:</span> Samsung Research | DRDO | Geta.AI</p>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              <Button variant="default" asChild>
                <a href="/resume.pdf" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/Aaryaman3" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/aaryaman-bajaj" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:ab6105@columbia.edu" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Aaryaman Bajaj" 
              className="w-48 h-48 rounded-full object-cover border-4 border-border shadow-lg"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="border-t border-border pt-12 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">About</h3>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              I'm a Computer Science graduate student at <span className="text-primary font-medium">Columbia University</span>, 
              focusing on Natural Language Processing and multi-modal AI systems. My work combines rigorous machine learning 
              research with practical systems deployment — especially for voice, vision, and real-time applications.
            </p>
            <p>
              I've gained industry experience through internships at <span className="text-primary font-medium">Samsung Research</span>, 
              <span className="text-primary font-medium">DRDO</span>, and AI startups like <span className="text-primary font-medium">Geta.AI</span>. 
              My research has been presented at multiple IEEE conferences, and I've led national-level hackathons during my undergraduate years.
            </p>
            <p>
              Outside of work, I enjoy mentoring students in AI/ML, organizing tech communities, and exploring how artificial 
              intelligence can be used to build a more accessible and equitable world.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="border-t border-border pt-12 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Experience</h3>
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">AI Engineer Intern</h4>
                <span className="text-sm text-muted-foreground">2024 - Present</span>
              </div>
              <p className="text-primary font-medium mb-2">Geta.AI</p>
              <p className="text-muted-foreground">
                Building end-to-end voice AI pipeline with real-time transcription, LLM integration, and telephony APIs. 
                Developed FastAPI backend and integrated call analytics frontend.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">Research Intern</h4>
                <span className="text-sm text-muted-foreground">Summer 2024</span>
              </div>
              <p className="text-primary font-medium mb-2">Samsung Research Institute, Bangalore</p>
              <p className="text-muted-foreground">
                Developed multilingual ASR system for smart home voice control. Built RAG-enhanced command understanding 
                with vector databases for dialect-specific processing.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-medium text-foreground">ML Research Intern</h4>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-primary font-medium mb-2">Defence Research and Development Organisation (DRDO)</p>
              <p className="text-muted-foreground">
                Created intelligent surveillance system for shoplifting detection using PoseNet and computer vision. 
                Implemented real-time alert systems with anomaly detection algorithms.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="border-t border-border pt-12 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-foreground">MS Computer Science (NLP Track)</h4>
              <p className="text-primary font-medium">Columbia University • 2025-2026</p>
              <p className="text-muted-foreground">Focus: Natural Language Processing, Multi-modal AI, Multi-agent Systems</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-foreground">BTech Computer Science & Engineering</h4>
              <p className="text-primary font-medium">SRM Vellore • 2021-2025</p>
              <p className="text-muted-foreground">Top 5% of Class • Research in Deep Learning and AI Systems</p>
            </div>
          </div>
        </div>
        
        {/* Recent Highlights */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Recent Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Voice AI Pipeline @ Geta.AI</h4>
              <p className="text-sm text-muted-foreground">
                Building end-to-end voice systems with real-time transcription and LLM integration.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">IEEE Publications</h4>
              <p className="text-sm text-muted-foreground">
                3 papers published in 2024 on speech analysis, RAG systems, and climate prediction.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">MS at Columbia</h4>
              <p className="text-sm text-muted-foreground">
                Pursuing NLP research with focus on multi-agent systems for emergency response.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Industry Experience</h4>
              <p className="text-sm text-muted-foreground">
                Applied research at Samsung, DRDO, and AI startups building production systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
