import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Contact = () => {
    const linkedinRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!linkedinRef.current) return;

            const rect = linkedinRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            // Magnetic effect within 150px radius
            if (distance < 150) {
                x.set(distanceX * 0.3);
                y.set(distanceY * 0.3);
            } else {
                x.set(0);
                y.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    return (
        <section className="py-24 px-6 min-h-[50vh] flex flex-col items-center justify-center relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-8 text-slate-800"
                >
                    Let's <span className="text-gradient">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-600 mb-12"
                >
                    Open to opportunities and collaborations
                </motion.p>

                <div className="flex flex-col items-center gap-6">
                    {/* Magnetic LinkedIn Button */}
                    <motion.a
                        ref={linkedinRef}
                        href="https://www.linkedin.com/in/coderash1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ x: xSpring, y: ySpring }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-card px-8 py-4 flex items-center gap-3 floating-shadow cursor-pointer group bg-white hover:bg-slate-50 border-emerald-100 hover:border-emerald-200"
                    >
                        <Linkedin className="text-emerald-600 group-hover:scale-110 transition-transform" size={28} />
                        <span className="text-lg font-semibold text-slate-800">Connect on LinkedIn</span>
                    </motion.a>

                    {/* Additional Contact Options */}
                    <div className="flex gap-4">
                        <motion.a
                            href="mailto:ashutoshasmal@example.com"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 bg-white rounded-full shadow-sm border border-slate-100 text-slate-600 hover:text-emerald-600 hover:shadow-md transition-all cursor-pointer"
                        >
                            <Mail size={24} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/coderash1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 bg-white rounded-full shadow-sm border border-slate-100 text-slate-600 hover:text-emerald-600 hover:shadow-md transition-all cursor-pointer"
                        >
                            <Github size={24} />
                        </motion.a>
                    </div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-slate-400 text-sm font-medium"
                >
                    <p>© 2026 Ashutosh Sasmal. Built with React, Tailwind & Framer Motion.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
