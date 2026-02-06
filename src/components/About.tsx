import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { Code2, Palette, Terminal } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: '前端开发',
      description: '熟练使用 React、Vue 等现代前端框架，注重用户体验和交互设计',
    },
    {
      icon: Palette,
      title: 'UI/UX 设计',
      description: '具备良好的审美能力，能够设计美观且易用的用户界面',
    },
    {
      icon: Terminal,
      title: '全栈能力',
      description: '了解后端开发技术，能够独立完成完整的 Web 应用开发',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              关于我
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            热爱编程，追求极致，致力于创造优秀的产品体验
          </p>
        </motion.div>

        {/* 介绍卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 技能展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">技术栈</h3>
          <p className="text-gray-400">熟练掌握以下技术和工具</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.key
            );
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 bg-gray-900/30 rounded-2xl border border-gray-800"
              >
                <h4
                  className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-600 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 个人简介 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-400 text-lg leading-relaxed">
            我是一名充满热情的前端开发者，拥有 3 年以上的 Web 开发经验。
            我专注于使用现代技术栈构建高性能、可扩展的 Web 应用程序。
            在工作中，我注重代码质量和用户体验，喜欢探索新技术并将其应用到实际项目中。
            我相信好的代码不仅要能运行，还要易于维护和理解。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
