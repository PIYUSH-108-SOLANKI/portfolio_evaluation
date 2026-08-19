export interface SkillCategory {
  name: string;
  level: 'comfortable' | 'exploring';
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    level: 'comfortable',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'Dart', 'HTML', 'CSS'],
  },
  {
    name: 'Frontend',
    level: 'comfortable',
    items: ['React', 'Next.js', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    level: 'comfortable',
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'JWT'],
  },
  {
    name: 'Databases',
    level: 'comfortable',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB / Mongo Atlas',
      'Firebase',
      'Redis',
      'Neo4j',
    ],
  },
  {
    name: 'Cloud & DevOps',
    level: 'exploring',
    items: [
      'AWS EC2',
      'AWS S3',
      'AWS RDS',
      'AWS CloudFront',
      'AWS IAM',
      'Docker',
      'Linux',
      'Apache',
      'PM2',
      'Vercel',
    ],
  },
  {
    name: 'Other',
    level: 'exploring',
    items: [
      'Git / GitHub',
      'System Design',
      'Machine Learning',
      'IoT',
      'Blynk',
      'ESP8266',
      'RabbitMQ',
    ],
  },
];
