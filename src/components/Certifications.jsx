import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: 'M.Sc Computer Science',
        issuer: 'Woolf University',
        date: '2026',
        link: 'https://drive.google.com/file/d/1qH83ioB-XdVslOY3Soe_6Da19N5-pzK-/view?usp=drive_link'
    },
    {
        title: 'Frontend Developer',
        issuer: 'Relevel By Unacademy',
        date: '2022',
        link: 'https://drive.google.com/file/d/1iYKPMmuV7JOH5aS0J6_hEVOHsM0P3OES/view?usp=sharing'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-6 relative z-10 bg-white/30">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800"
                >
                    <span className="text-gradient">Certifications</span>
                </motion.h2>

                <div className="space-y-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-6 flex items-center justify-between group hover:border-emerald-200 transition-all cursor-pointer bg-white/60"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-emerald-100 transition-colors">
                                    <Award className="text-emerald-600" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium">
                                        {cert.issuer} • <span className="text-emerald-600/80">{cert.date}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                <a href={cert.link} target='_blank'>
                                    <ExternalLink className="text-slate-400 hover:text-emerald-600" size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
