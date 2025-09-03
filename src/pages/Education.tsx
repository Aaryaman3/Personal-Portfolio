import Layout from '@/components/Layout';

const Education = () => {
  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold mb-8 text-foreground">Education</h1>
        
        <div className="space-y-8">
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-xl font-medium text-foreground mb-2">MS Computer Science (NLP Track)</h3>
            <p className="text-primary font-medium mb-2">Columbia University • 2024-2026</p>
            <p className="text-muted-foreground mb-4">New York City, USA</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground">Focus Areas</h4>
                <p className="text-muted-foreground">Natural Language Processing, Multi-modal AI, Multi-agent Systems for Emergency Response</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Current Research</h4>
                <p className="text-muted-foreground">
                  Thesis work on multi-agent reinforcement learning for emergency response coordination. 
                  Exploring how large language models can be integrated with real-time systems for intelligent decision making.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Relevant Coursework</h4>
                <p className="text-muted-foreground">
                  Advanced NLP, Machine Learning Theory, Computer Vision, Distributed Systems, 
                  Human-Computer Interaction
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-xl font-medium text-foreground mb-2">BTech Computer Science & Engineering</h3>
            <p className="text-primary font-medium mb-2">SRM Institute of science and technology • 2020-2024</p>
            <p className="text-muted-foreground mb-4">Chennai, Tamil Nadu, India</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground">Academic Achievement</h4>
                <p className="text-muted-foreground">Magna Cum Laude • CGPA: 9.1/10.0</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Specialization</h4>
                <p className="text-muted-foreground">
                  Deep Learning and AI Systems with focus on practical applications in speech processing, 
                  computer vision, and natural language understanding.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Final Year Project</h4>
                <p className="text-muted-foreground">
                  "Holistic Speech Analysis using Deep Learning" - Multi-modal approach for simultaneous 
                  age, gender, and emotion detection from speech signals. Published at IEEE ICCCNT 2024.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Key Subjects</h4>
                <p className="text-muted-foreground">
                  Data Structures & Algorithms, Machine Learning, Computer Networks, Database Management, 
                  Software Engineering, Operating Systems, Artificial Intelligence
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-medium mb-6 text-foreground">Academic Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Research Publications</h4>
              <p className="text-sm text-muted-foreground">
                3 IEEE conference papers during undergraduate studies across speech analysis, 
                recommendation systems, and climate modeling.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Academic Recognition</h4>
              <p className="text-sm text-muted-foreground">
                Magna Cum Laude distinction with consistent academic excellence 
                and research contributions.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Technical Leadership</h4>
              <p className="text-sm text-muted-foreground">
                Led technical teams in hackathons and student organizations, 
                mentoring peers in AI/ML projects.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg bg-card">
              <h4 className="font-medium text-foreground mb-2">Industry Preparation</h4>
              <p className="text-sm text-muted-foreground">
                Strong foundation in both theoretical concepts and practical 
                implementation through internships and projects.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-medium mb-6 text-foreground">Certifications & Skills</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'TensorFlow', 'React', 'Node.js', 'FastAPI', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-2">AI/ML Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['Hugging Face', 'Whisper', 'LangChain', 'FAISS', 'OpenCV', 'scikit-learn', 'Pandas', 'NumPy'].map((framework) => (
                  <span key={framework} className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-md text-sm">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;