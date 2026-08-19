export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isHackathon?: boolean;
  architecture?: ArchitectureNode[];
  isFeatured: boolean;
}

export interface ArchitectureNode {
  label: string;
  children?: string[];
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Short-Video Platform',
    subtitle: 'Scalable System Design',
    description:
      'A system-design project focused on designing a scalable short-video platform. Covers the full pipeline from video upload to streaming, with attention to authentication, storage, caching, content delivery and scalability.',
    problem:
      'Design a platform that handles video uploads, processing, storage, and streaming at scale while maintaining low latency and high availability.',
    solution:
      'Architected a multi-layer system with API gateway, application servers, object storage, CDN, caching layer and message queues for async processing.',
    technologies: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'AWS S3',
      'CloudFront',
      'JWT',
      'RabbitMQ',
      'HLS',
    ],
    features: [
      'JWT-based authentication',
      'Video upload pipeline',
      'AWS S3 object storage',
      'HLS video streaming',
      'CloudFront CDN delivery',
      'Redis caching layer',
      'RabbitMQ message queues',
      'Scalable database design',
    ],
    architecture: [
      {
        label: 'User',
        children: ['API Gateway'],
      },
      {
        label: 'API Gateway',
        children: ['Auth', 'App Server'],
      },
      {
        label: 'Auth',
        children: ['JWT', 'Redis Session'],
      },
      {
        label: 'App Server',
        children: ['PostgreSQL', 'Redis Cache'],
      },
      {
        label: 'Video Upload',
        children: ['AWS S3', 'Processing Queue'],
      },
      {
        label: 'Processing Queue',
        children: ['RabbitMQ'],
      },
      {
        label: 'RabbitMQ',
        children: ['HLS Encoding'],
      },
      {
        label: 'HLS Encoding',
        children: ['CloudFront CDN'],
      },
    ],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'SkillTrack Analytics',
    subtitle: 'Hackathon Project',
    description:
      'A hackathon project exploring the use of technology and analytics to address problems in the healthcare domain. Developed during the Hachx NMIMS hackathon.',
    technologies: ['Python', 'Data Analytics', 'Healthcare'],
    isHackathon: true,
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Advox',
    subtitle: '',
    description:
      'A software project developed as part of my journey of building practical technology solutions.',
    technologies: ['[ADD TECHNOLOGIES]'],
    githubUrl: '[ADD GITHUB LINK]',
    isFeatured: true,
  },
  {
    id: 4,
    title: 'IoT Automatic Pet Feeder',
    subtitle: 'Hardware + IoT',
    description:
      'An IoT-based automatic pet feeder prototype built using an ESP8266 microcontroller, servo motor, buzzer and Blynk IoT platform for remote control and scheduling.',
    technologies: ['ESP8266', 'Blynk', 'Servo Motor', 'Buzzer', 'IoT'],
    features: [
      'Embedded systems programming',
      'IoT connectivity and remote control',
      'Hardware-software integration',
      'Automated scheduling',
    ],
    isFeatured: true,
  },
];

export const otherProjects = [
  { name: 'Smart Dustbin', technologies: ['IoT', 'Sensors'] },
  {
    name: 'Smart Irrigation System',
    technologies: ['IoT', 'Automation'],
  },
  {
    name: 'Kitchen Safety System',
    technologies: ['IoT', 'Sensors'],
  },
];
