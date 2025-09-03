import Layout from '@/components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold mb-8 text-foreground">Projects</h1>
        
        <div className="space-y-8">
          <div className="p-6 border border-border rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-3 text-foreground">
              Voice AI Call Pipeline — Geta.AI (2025)
            </h3>
            <p className="text-muted-foreground mb-4">
              End-to-end system for automated voice interactions: speech synthesis, real-time transcription, 
              LLM inference, and telephony API integration. Built scalable backend using FastAPI with 
              real-time call analytics frontend.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">FastAPI</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">WebRTC</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Whisper</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">LLM</span>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link-primary font-medium">Live Demo</a>
              <a href="#" className="link-primary font-medium">GitHub</a>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-3 text-foreground">
              Smart Home Voice Control — Samsung (2024)
            </h3>
            <p className="text-muted-foreground mb-4">
              Built multilingual ASR system with RAG-powered command understanding. 
              Integrated vector database for dialect-specific commands and context-aware responses.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">ASR</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">RAG</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Vector DB</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">React</span>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link-primary font-medium">Case Study</a>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-3 text-foreground">
              AI Ambulance Dispatch System (2024)
            </h3>
            <p className="text-muted-foreground mb-4">
              Full-stack ML+React system for emergency triage with intelligent call routing. 
              Features real-time ambulance tracking, automated severity assessment, and live dispatch coordination.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">React</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">ML Pipeline</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Real-time</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Geolocation</span>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link-primary font-medium">GitHub</a>
              <a href="#" className="link-primary font-medium">Demo Video</a>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card">
            <h3 className="text-xl font-medium mb-3 text-foreground">
              Shoplifting Detection System — DRDO (2024)
            </h3>
            <p className="text-muted-foreground mb-4">
              Computer vision system using PoseNet and vision-language models for anomaly detection 
              in surveillance footage. Deployed real-time alerting with 91% accuracy in retail environments.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Computer Vision</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">PoseNet</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Surveillance</span>
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Real-time</span>
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link-primary font-medium">Technical Report</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;