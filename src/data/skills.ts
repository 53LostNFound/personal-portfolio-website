export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Express', category: 'backend' },
  
  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Webpack', category: 'tools' },
  { name: 'Vite', category: 'tools' },
];

export const skillCategories = [
  { key: 'frontend', label: '前端开发', color: 'from-blue-500 to-cyan-500' },
  { key: 'backend', label: '后端开发', color: 'from-green-500 to-emerald-500' },
  { key: 'tools', label: '开发工具', color: 'from-purple-500 to-pink-500' },
];
