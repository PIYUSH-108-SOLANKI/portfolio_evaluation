export interface Achievement {
  title: string;
  result: string;
  description: string;
  project?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Skillify Hackathon',
    result: 'Runner-up',
    description:
      'Built and presented a solution under hackathon constraints, finishing as a runner-up.',
  },
  {
    title: 'SaaS Hackathon',
    result: '2nd Place',
    description:
      'Developed a SaaS-oriented project and secured second place.',
  },
  {
    title: 'Hachx NMIMS',
    result: 'Participant',
    description:
      'Participated in the hackathon with a healthcare-focused analytics project.',
    project: 'SkillTrack Analytics / Medical Analyzer',
  },
];
