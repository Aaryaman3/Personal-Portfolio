import Layout from '@/components/Layout';

const Research = () => {
  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold mb-8 text-foreground">Research & Publications</h1>
        
        <div className="space-y-8">
          <div className="border-l-2 border-primary/20 pl-6">
            <h3 className="text-xl font-medium mb-2 text-foreground">
              Holistic Speech Analysis using Deep Learning
            </h3>
            <p className="text-sm text-primary font-medium mb-2">IEEE ICCCNT 2024</p>
            <p className="text-muted-foreground mb-3">
              Multimodal model for age/gender/emotion detection from speech signals. 
              Achieved 94% accuracy across demographic classifications using transformer-based architectures.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link-primary font-medium">PDF</a>
              <a href="#" className="link-primary font-medium">DOI</a>
            </div>
          </div>

          <div className="border-l-2 border-primary/20 pl-6">
            <h3 className="text-xl font-medium mb-2 text-foreground">
              CareerBoost: RAG-NLP Job Recommendation System
            </h3>
            <p className="text-sm text-primary font-medium mb-2">IEEE I-SMAC 2024</p>
            <p className="text-muted-foreground mb-3">
              Hybrid recommendation system using vector search and LLMs for job relevance matching. 
              Integrated semantic search with contextual ranking for personalized career guidance.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link-primary font-medium">PDF</a>
              <a href="#" className="link-primary font-medium">DOI</a>
            </div>
          </div>

          <div className="border-l-2 border-primary/20 pl-6">
            <h3 className="text-xl font-medium mb-2 text-foreground">
              Urban Heat Prediction using Generative Adversarial Networks
            </h3>
            <p className="text-sm text-primary font-medium mb-2">IEEE MysuruCon 2024</p>
            <p className="text-muted-foreground mb-3">
              Used conditional GANs for city-scale climate simulation and heat island prediction. 
              Integrated satellite imagery with meteorological data for accurate temperature forecasting.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link-primary font-medium">PDF</a>
              <a href="#" className="link-primary font-medium">DOI</a>
            </div>
          </div>

          <div className="border-l-2 border-muted/40 pl-6">
            <h3 className="text-xl font-medium mb-2 text-foreground">
              Multi-Agent Reinforcement Learning for Emergency Response
            </h3>
            <p className="text-sm text-accent font-medium mb-2">Under Review</p>
            <p className="text-muted-foreground mb-3">
              Novel approach to coordinating autonomous agents in crisis scenarios using distributed RL. 
              Submitted to ICML 2025.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Research;