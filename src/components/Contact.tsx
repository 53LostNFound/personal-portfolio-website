import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'developer@example.com',
      href: 'mailto:developer@example.com',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/developer',
      href: 'https://github.com/developer',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/developer',
      href: 'https://linkedin.com/in/developer',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@developer',
      href: 'https://twitter.com/developer',
      color: 'from-sky-400 to-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
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
              联系我
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            如果您有任何问题或合作意向，欢迎通过以下方式与我联系
          </p>
        </motion.div>

        {/* 联系方式卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* 图标 */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* 信息 */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <p className="text-white font-medium truncate group-hover:text-purple-400 transition-colors">
                  {item.value}
                </p>
              </div>

              {/* 箭头 */}
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            期待与您的交流！
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
