import { motion } from 'framer-motion';
import { Briefcase, Boxes, Cloud } from 'lucide-react';

const experiences = [
    {
        icon: Boxes,
        title: 'Microservices Architecture',
        description: 'Designed and implemented distributed systems using Spring Boot, ensuring high availability and scalability across multiple services.',
        highlights: ['Event-Driven Design', 'Service Mesh', 'API Gateway'],
    },
    {
        icon: Cloud,
        title: 'AWS Cloud Migrations',
        description: 'Led cloud migration initiatives, transitioning legacy monoliths to modern cloud-native architectures on AWS.',
        highlights: ['EC2 & ECS', 'RDS & DynamoDB', 'CloudFormation'],
    },
    {
        icon: Briefcase,
        title: 'Full-Stack Development',
        description: 'Built end-to-end solutions with React frontends and Java/Node.js backends, delivering seamless user experiences.',
        highlights: ['React & Redux', 'RESTful APIs', 'Real-time Features'],
    },
];

const Experience = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
                >
                    <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -8 }}
                            className="glass-card-hover p-8 bg-white/60"
                        >
                            <div className="mb-6 inline-block p-3 rounded-xl bg-emerald-50">
                                <exp.icon className="text-emerald-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{exp.title}</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
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
