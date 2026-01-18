import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Award } from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, href: '#hero' },
    { name: 'Stack', icon: Code, href: '#stack' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Experience', icon: User, href: '#experience' },
    { name: 'Certifications', icon: Award, href: '#certifications' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav className="glass-card px-2 py-2 rounded-full border border-white/40 shadow-lg bg-white/70 backdrop-blur-xl">
                <ul className="flex items-center gap-1 md:gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-600 hover:text-emerald-600 hover:bg-white/50 transition-all duration-300 group"
                            >
                                <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                                <span className="hidden md:block text-sm font-medium">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
};

export default Navbar;
