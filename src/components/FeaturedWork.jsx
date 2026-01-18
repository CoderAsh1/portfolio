import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Calendar, Truck, Shield, Database, Activity } from 'lucide-react';

const projects = [
    {
        title: 'Vehicle Tracking System',
        subtitle: 'Real-time Logistics & Security Platform',
        description: 'Architected a comprehensive vehicle tracking and management system to optimize logistics and enhance security operations.',
        icon: Truck,
        period: '2023',
        location: 'India',
        achievements: [
            'Architected real-time tracking using React, PostgreSQL, AWS (Amplify, IoT), and Google Maps.',
            'Engineered Advanced Gate Pass system for monitoring entry/exit and coal loads.',
            'Integrated ZK Bio CV security for automatic vehicle recognition and gate control.',
            'Leveraged AWS IoT Core for real-time FMB 920 device data ingestion.',
        ],
        tech: ['React', 'PostgreSQL', 'AWS IoT', 'Google Maps API'],
        gradient: 'from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
    },
    {
        title: 'PhoxHealth',
        subtitle: 'Medicine Delivery Platform Expansion',
        description: 'Led the architectural design and implementation of PhoxHealth\'s international expansion, enabling medicine delivery across two continents.',
        icon: Activity,
        period: '2022 - Present',
        location: 'USA / India',
        achievements: [
            'Multi-region deployment architecture',
            'Cross-border payment integration',
            'Regulatory compliance framework',
        ],
        tech: ['Spring Boot', 'AWS', 'Kafka', 'Microservices'],
        gradient: 'from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
    }
];

const FeaturedWork = () => {
    return (
        <section id="projects" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
                >
                    Featured <span className="text-gradient">Work</span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 floating-shadow bg-white/60 flex flex-col h-full group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                                    <project.icon size={28} />
                                </div>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-full text-slate-600">
                                        {project.period}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-emerald-600 font-medium mb-4">{project.subtitle}</p>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mt-auto space-y-6">
                                <div className="bg-white/50 p-5 rounded-xl border border-white/60">
                                    <h4 className="text-slate-800 font-bold mb-3 flex items-center gap-2">
                                        <Shield size={16} className="text-emerald-500" /> Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-600">
                                                <span className="mr-2 text-emerald-500 mt-1">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
