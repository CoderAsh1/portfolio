import { motion } from 'framer-motion';
import { Briefcase, Boxes, Cloud, TrendingUp, Zap } from 'lucide-react';

const experiences = [
    {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Specialized in high-performance backend systems. Successfully structural refactoring led to significant latency improvements.',
        highlights: ['Backend Latency Reduced by 80%', 'Structural Refactoring', 'Java Concurrency'],
    },
    {
        icon: TrendingUp,
        title: 'Cost & Operational Efficiency',
        description: 'Innovative approach to system architecture. Built an in-house routing engine that drastically reduced operational expenditure.',
        highlights: ['Costs Reduced by 35%', 'Custom Routing Engine', 'System Architecture'],
    },
    {
        icon: Boxes,
        title: 'Scalable Microservices',
        description: 'Designed and implemented distributed systems using Spring Boot, ensuring high availability and scalability across multiple services.',
        highlights: ['Event-Driven Design', 'Spring Boot', 'Kafka'],
    },
    {
        icon: Cloud,
        title: 'AWS Cloud Native',
        description: 'Led cloud migration initiatives, transitioning legacy monoliths to modern cloud-native architectures on AWS.',
        highlights: ['EC2 & ECS', 'DynamoDB', 'CloudFormation'],
    },
    {
        icon: Briefcase,
        title: 'Leadership & Mentoring',
        description: 'Committed to mentoring junior engineers and upholding clean code principles (SOLID, DRY) through code reviews and workshops.',
        highlights: ['Mentorship', 'Code Quality', 'SOLID Principles'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
                >
                    <span className="text-gradient">Experience & Expertise</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-card-hover p-8 bg-white/60 h-full"
                        >
                            <div className="mb-6 inline-block p-3 rounded-xl bg-emerald-50">
                                <exp.icon className="text-emerald-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{exp.title}</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {exp.highlights.map((highlight) => (
                                    <span
                                        key={highlight}
                                        className="text-xs px-3 py-1 bg-white border border-emerald-100 text-emerald-700 rounded-full font-medium shadow-sm"
                                    >
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
