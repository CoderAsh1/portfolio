import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = ['Software Engineer', 'Problem Solver', 'Fullstack Developer'];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden pt-32">
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

            <div className="max-w-5xl mx-auto text-center relative z-10 transition-all flex flex-col items-center">
                {/* Floating 3D Text Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1
                        className="text-6xl md:text-9xl font-bold tracking-tight text-slate-800 animate-glow-subtle"
                        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                    >
                        <span className="text-gradient inline-block">Ashutosh</span> Sasmal
                    </h1>
                </motion.div>

                <motion.h2
                    key={titleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl text-slate-600 mb-6 font-light h-12 md:h-16"
                >
                    {titles[titleIndex]}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    Building scalable, high-performance applications with expertise in the Java ecosystem and modern JavaScript frameworks.
                    Architecting efficient, maintainable, and future-ready systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="inline-block px-6 py-2 mb-12 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-medium text-sm md:text-base shadow-sm"
                >
                    🎓 Master’s in CS @ Woolf University & Scaler Academy
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
