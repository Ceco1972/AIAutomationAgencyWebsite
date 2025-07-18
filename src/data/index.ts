import { Service, Testimonial, BlogPost, TeamMember, Job } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Business Process Automation',
    description: 'Streamline your operations with intelligent automation solutions that reduce manual work and increase efficiency.',
    icon: 'Zap',
    features: ['Workflow Optimization', 'Document Processing', 'Task Automation', 'Integration Solutions']
  },
  {
    id: '2',
    title: 'AI Chatbot Development',
    description: 'Create intelligent conversational interfaces that provide 24/7 customer support and lead qualification.',
    icon: 'MessageSquare',
    features: ['Natural Language Processing', 'Multi-platform Deployment', 'Custom Training', 'Analytics Dashboard']
  },
  {
    id: '3',
    title: 'Intelligent Data Analysis',
    description: 'Transform your data into actionable insights with advanced AI analytics and predictive modeling.',
    icon: 'BarChart3',
    features: ['Predictive Analytics', 'Real-time Processing', 'Data Visualization', 'Machine Learning Models']
  },
  {
    id: '4',
    title: 'AI Workflow Optimization',
    description: 'Optimize your business workflows with AI-powered decision making and process intelligence.',
    icon: 'GitBranch',
    features: ['Process Mining', 'Decision Automation', 'Performance Monitoring', 'Continuous Improvement']
  },
  {
    id: '5',
    title: 'Custom AI Model Integration',
    description: 'Integrate cutting-edge AI models seamlessly into your existing systems and applications.',
    icon: 'Brain',
    features: ['Model Development', 'API Integration', 'Scalable Deployment', 'Performance Optimization']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    content: 'AI Automation Agency transformed our operations completely. Their intelligent automation solutions reduced our processing time by 80% and eliminated human errors.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Operations Director',
    company: 'Global Dynamics',
    content: 'The AI chatbot they developed has revolutionized our customer service. We now handle 3x more inquiries with higher satisfaction rates.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Emily Foster',
    role: 'CEO',
    company: 'InnovateCorp',
    content: 'Their data analysis platform gave us insights we never knew existed. Our decision-making process is now data-driven and incredibly accurate.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Business Automation: AI-Driven Transformation',
    excerpt: 'Discover how artificial intelligence is reshaping business processes and creating unprecedented opportunities for growth.',
    content: 'Full article content here...',
    author: 'Dr. Alex Thompson',
    date: '2024-12-15',
    category: 'AI Trends',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'future-of-business-automation'
  },
  {
    id: '2',
    title: 'Implementing AI Chatbots: Best Practices for Success',
    excerpt: 'Learn the key strategies for deploying AI chatbots that deliver exceptional customer experiences.',
    content: 'Full article content here...',
    author: 'Maria Gonzalez',
    date: '2024-12-10',
    category: 'Implementation',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'implementing-ai-chatbots'
  },
  {
    id: '3',
    title: 'Data Analytics Revolution: From Raw Data to Strategic Insights',
    excerpt: 'Explore how modern AI analytics platforms are transforming raw data into strategic business advantages.',
    content: 'Full article content here...',
    author: 'James Mitchell',
    date: '2024-12-05',
    category: 'Analytics',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'data-analytics-revolution'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Alexandra Thompson',
    role: 'CEO & AI Strategist',
    bio: 'Leading AI researcher with 15+ years in machine learning and business automation.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com/in/alexandra-thompson'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'CTO & Technical Lead',
    bio: 'Former Google AI engineer specializing in large-scale AI system architecture.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com/in/marcus-chen'
  },
  {
    id: '3',
    name: 'Sarah Rodriguez',
    role: 'Head of Operations',
    bio: 'Business process expert with expertise in AI-driven operational optimization.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com/in/sarah-rodriguez'
  }
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
    requirements: [
      '5+ years experience in machine learning',
      'Expertise in Python, TensorFlow, PyTorch',
      'Experience with cloud platforms (AWS, GCP)',
      'Strong problem-solving skills'
    ]
  },
  {
    id: '2',
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Drive business growth by identifying and securing new client partnerships.',
    requirements: [
      '3+ years in B2B sales',
      'Experience in technology/AI industry',
      'Strong communication skills',
      'Track record of meeting sales targets'
    ]
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract',
    description: 'Design intuitive interfaces for AI-powered applications and platforms.',
    requirements: [
      'Portfolio of UI/UX design work',
      'Proficiency in Figma, Adobe Creative Suite',
      'Experience with design systems',
      'Understanding of user research methods'
    ]
  }
];