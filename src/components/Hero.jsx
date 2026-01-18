import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
            {/* Background Image - Absolute Positioning */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Abstract Background"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Floating 3D Text Effect - Adapted for Light Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-6xl md:text-9xl font-bold mb-6 tracking-tight text-slate-800"
                        style={{
                            // Subtle colored shadow instead of glow for light theme
                            textShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        }}
                    >
                        Ashutosh <span className="text-gradient">Sasmal</span>
                    </motion.h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl md:text-4xl text-slate-600 mb-6 font-light"
                >
                    Full-Stack Engineer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting high-performance, weightless digital experiences with modern architecture.
                </motion.p>

                {/* Floating Cards - Light Theme Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    {['Microservices', 'AWS', 'React', 'Spring Boot'].map((tech, index) => (
                        <motion.div
                            key={tech}
                            className="px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/50 shadow-sm text-slate-700 font-medium"
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 3,
                                delay: index * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.9)' }}
                        >
                            <span className="text-emerald-600 mr-2">•</span>{tech}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="text-slate-400" size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
