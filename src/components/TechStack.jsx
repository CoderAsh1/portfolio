import { motion } from 'framer-motion';
import { Coffee, Database, Cloud, Zap, Code2, Server } from 'lucide-react';

const techStack = [
    { name: 'Java', icon: Coffee, color: '#f89820' },
    { name: 'Spring Boot', icon: Server, color: '#6db33f' },
    { name: 'React', icon: Code2, color: '#61dafb' },
    { name: 'Node.js', icon: Zap, color: '#68a063' },
    { name: 'AWS', icon: Cloud, color: '#ff9900' },
    { name: 'Kafka', icon: Database, color: '#231f20' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const TechStack = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
                >
                    The <span className="text-gradient">Stack</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {techStack.map(({ name, icon: Icon, color }) => (
                        <motion.div
                            key={name}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                shadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}
                            className="glass-card-hover p-8 flex flex-col items-center justify-center gap-6 cursor-pointer group bg-white/40"
                        >
                            <div className="relative">
                                {/* Animated Background Blob */}
                                <motion.div
                                    className="absolute inset-0 rounded-full blur-xl opacity-20"
                                    style={{ backgroundColor: color }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.2, 0.4, 0.2]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Icon with float animation */}
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Icon
                                        size={56}
                                        style={{ color }}
                                        strokeWidth={1.5}
                                        className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                                    />
                                </motion.div>
                            </div>

                            <span className="text-lg font-semibold text-slate-700">{name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
