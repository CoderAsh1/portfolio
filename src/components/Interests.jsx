import { motion } from 'framer-motion';
import { Dumbbell, SkipForward, Music, TrendingUp } from 'lucide-react';

const interests = [
    {
        icon: Dumbbell,
        title: 'Calisthenics',
        description: 'Building strength through bodyweight training',
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
        iconColor: 'text-orange-500'
    },
    {
        icon: SkipForward,
        title: 'Jump Rope',
        description: 'Cardio and coordination mastery',
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
        iconColor: 'text-blue-500'
    },
    {
        icon: Music,
        title: 'Guitar',
        description: 'Exploring rhythm and melody',
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
        iconColor: 'text-purple-500'
    },
    {
        icon: TrendingUp,
        title: 'Stock Trading',
        description: 'Analyzing markets and trends',
        gradient: 'from-emerald-500 to-teal-500',
        bgGradient: 'from-emerald-50 to-teal-50',
        iconColor: 'text-emerald-500'
    },
];

const Interests = () => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
                >
                    Beyond <span className="text-gradient">Code</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={interest.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-card p-6 relative overflow-hidden group cursor-pointer bg-white/70 h-full flex flex-col items-center text-center"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${interest.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />

                            <div className="relative z-10">
                                <div className={`mb-6 p-4 rounded-full bg-white/80 w-fit mx-auto shadow-sm ring-1 ring-slate-100 group-hover:scale-110 transition-transform duration-300`}>
                                    <interest.icon className={`${interest.iconColor}`} size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800">{interest.title}</h3>
                                <p className="text-slate-600 text-sm font-medium group-hover:text-slate-800 transition-colors">{interest.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
