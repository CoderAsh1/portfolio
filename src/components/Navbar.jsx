import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', icon: Home, href: '#hero' },
    { name: 'Stack', icon: Code, href: '#stack' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Experience', icon: User, href: '#experience' },
    { name: 'Certifications', icon: Award, href: '#certifications' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Heartbeat Sound Effect using Web Audio API
    // Only kept for click interaction as requested (scroll sound removed)
    const playHeartbeat = () => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();

            // Function to create a heartbeat pulse
            const createPulse = (time, duration, frequency, volume) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(frequency, time);
                osc.frequency.exponentialRampToValueAtTime(frequency / 2, time + duration);

                gain.gain.setValueAtTime(volume, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(time);
                osc.stop(time + duration);
            };

            // Play "lub-dub" sound (two pulses)
            const now = ctx.currentTime;
            // "Lub" - deeper, starting at 100Hz dropping to 50Hz quickly
            createPulse(now, 0.15, 100, 0.5);
            // "Dub" - slightly higher pitch, starting at 120Hz
            createPulse(now + 0.2, 0.15, 120, 0.3);
        } catch (e) {
            console.error("Audio playback failed", e);
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav className="glass-card px-2 py-2 rounded-full border border-white/40 shadow-lg bg-white/10 backdrop-blur-xl">
                <ul className="flex items-center gap-1 md:gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={playHeartbeat}
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
