import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
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
              项目作品
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            以下是我近期完成的一些项目，涵盖了 Web 应用、移动端应用和数据可视化等多个领域
          </p>
        </motion.div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* 项目截图 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              {/* 项目信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 链接按钮 */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    查看项目
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-600 text-white rounded-lg hover:border-gray-400 transition-colors"
                    >
                      <Github size={16} />
                      源码
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
