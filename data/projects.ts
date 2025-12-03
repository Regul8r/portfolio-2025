import { Project } from '@/types/project';

export const projectData: Project[] = [
  {
    id: '1',
    title: 'Inclusive Design Lab',
    category: 'Web Design',
    description: 'Case study demonstrating the application of core accessibility standards to a modern web application, focusing on keyboard navigation and contrast ratios.', // <<< TIGHTENED TEXT
    image: '/projects/Inclusive.jpg', // <<< CORRECTED IMAGE PATH
    year: '2025', // <<< CORRECTED YEAR
    tags: ['Next.js', 'Tailwind CSS', 'Accessibility', 'Case Study'],
    link: '/case-study/inclusive-design-lab',
  },
];
