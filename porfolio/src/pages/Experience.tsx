import Layout from '@/components/Layout';

const Experience = () => {
  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold mb-8 text-foreground">Experience</h1>
        
        <div className="space-y-8">
          <div className="border-l-2 border-primary pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-medium text-foreground">AI Engineer Intern</h3>
              <span className="text-sm text-muted-foreground">2024 - Present</span>
            </div>
            <p className="text-primary font-medium mb-3">Geta.AI</p>
            <p className="text-muted-foreground leading-relaxed">
              Building end-to-end voice AI pipeline with real-time transcription, LLM integration, and telephony APIs. 
              Developed FastAPI backend and integrated call analytics frontend. Working with cutting-edge speech synthesis 
              and natural language processing technologies to create seamless voice experiences.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-medium text-foreground">Research Intern</h3>
              <span className="text-sm text-muted-foreground">Summer 2024</span>
            </div>
            <p className="text-primary font-medium mb-3">Samsung Research Institute, Bangalore</p>
            <p className="text-muted-foreground leading-relaxed">
              Developed multilingual ASR system for smart home voice control. Built RAG-enhanced command understanding 
              with vector databases for dialect-specific processing. Focused on improving accuracy for Indian English 
              and regional language variations in voice commands.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-medium text-foreground">ML Research Intern</h3>
              <span className="text-sm text-muted-foreground">2024</span>
            </div>
            <p className="text-primary font-medium mb-3">Defence Research and Development Organisation (DRDO)</p>
            <p className="text-muted-foreground leading-relaxed">
              Created intelligent surveillance system for shoplifting detection using PoseNet and computer vision. 
              Implemented real-time alert systems with anomaly detection algorithms. Achieved 92% accuracy in 
              behavioral pattern recognition for security applications.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-medium text-foreground">Research Assistant</h3>
              <span className="text-sm text-muted-foreground">2022 - 2024</span>
            </div>
            <p className="text-primary font-medium mb-3">VIT University</p>
            <p className="text-muted-foreground leading-relaxed">
              Led research in deep learning applications for speech analysis and climate prediction. Published 3 IEEE 
              papers on holistic speech analysis, RAG-based job recommendation systems, and urban heat prediction using 
              GANs. Mentored undergraduate students in machine learning projects.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-medium mb-6 text-foreground">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">3 IEEE Publications</h4>
              <p className="text-sm text-muted-foreground">
                Published research in ICCCNT, I-SMAC, and MysuruCon 2024 conferences.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Hackathon Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Led national-level hackathons during undergraduate years.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Production Systems</h4>
              <p className="text-sm text-muted-foreground">
                Deployed AI systems in real-world environments with measurable impact.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Mentorship</h4>
              <p className="text-sm text-muted-foreground">
                Guided 15+ students in AI/ML projects and career development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;