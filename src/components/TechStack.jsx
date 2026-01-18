import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

// Using Simple Icons CDN for authentic brand logos
// Format: https://cdn.simpleicons.org/[ICON_SLUG]/[COLOR_HEX]
const orbitingSkills = [
    // Inner Orbit - Core Backend
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk/f89820', radius: 130, duration: 25 },
    { name: 'Spring', logo: 'https://cdn.simpleicons.org/spring/6db33f', radius: 130, duration: 25, delay: 6 },
    { name: 'Kafka', logo: 'https://cdn.simpleicons.org/apachekafka/231f20', radius: 130, duration: 25, delay: 12 },
    { name: 'Redis', logo: 'https://cdn.simpleicons.org/redis/d82c20', radius: 130, duration: 25, delay: 18 },

    // Middle Orbit - Frontend & Ecosystem
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61dafb', radius: 210, duration: 35, delay: 0 },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000', radius: 210, duration: 35, delay: 7 },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/68a063', radius: 210, duration: 35, delay: 14 },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178c6', radius: 210, duration: 35, delay: 21 },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/f7df1e', radius: 210, duration: 35, delay: 28 },

    // Outer Orbit - Infrastructure & Data
    { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonwebservices/ff9900', radius: 290, duration: 45, delay: 0 },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ed', radius: 290, duration: 45, delay: 9 },
    { name: 'Postgres', logo: 'https://cdn.simpleicons.org/postgresql/336791', radius: 290, duration: 45, delay: 18 },
    { name: 'DynamoDB', logo: 'https://cdn.simpleicons.org/amazondynamodb/4053D6', radius: 290, duration: 45, delay: 27 },
    { name: 'Elastic', logo: 'https://cdn.simpleicons.org/elasticsearch/005571', radius: 290, duration: 45, delay: 36 },
];

const OrbitItem = ({ skill }) => {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
                width: skill.radius * 2,
                height: skill.radius * 2,
                x: '-50%',
                y: '-50%',
            }}
            animate={{ rotate: 360 }}
            transition={{
                duration: skill.duration,
                repeat: Infinity,
                ease: "linear",
                delay: -skill.delay
            }}
        >
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                // Counter-rotate the container of the icon to keep it upright
                animate={{ rotate: -360 }}
                transition={{
                    duration: skill.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: -skill.delay
                }}
            >
                <motion.div
                    className="bg-white p-3 rounded-full shadow-lg border border-slate-100 flex items-center justify-center gap-2 group cursor-pointer hover:shadow-xl transition-all relative"
                    whileHover={{ scale: 1.25 }}
                >
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />

                    {/* Tooltip - Using opacity instead of display for smoother transition */}
                    <div className="opacity-0 group-hover:opacity-100 absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-2xl whitespace-nowrap pointer-events-none transition-opacity duration-200" style={{ zIndex: 9999 }}>
                        {skill.name}
                        {/* Arrow pointer */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const TechStack = () => {
    return (
        <section id="stack" className="py-24 px-6 relative z-10 overflow-hidden min-h-[850px] flex items-center justify-center bg-radial-gradient">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-24 text-slate-800"
                >
                    Technical <span className="text-gradient">Orbit</span>
                </motion.h2>

                {/* Orbit Container - Responsive sizing */}
                <div className="relative w-[320px] h-[320px] md:w-[650px] md:h-[650px] flex items-center justify-center my-10 scale-75 md:scale-100">

                    {/* Center Brain */}
                    <div className="absolute z-20 bg-white/90 backdrop-blur-xl p-8 rounded-full shadow-2xl border-4 border-emerald-50 shadow-emerald-200/50">
                        <Brain size={64} className="text-emerald-600 animate-pulse-slow" />
                    </div>

                    {/* Orbital Rings */}
                    {[130, 210, 290].map((radius, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full border border-slate-200/50"
                            style={{
                                width: radius * 2,
                                height: radius * 2,
                            }}
                        />
                    ))}

                    {/* Orbiting Items */}
                    {orbitingSkills.map((skill) => (
                        <OrbitItem key={skill.name} skill={skill} />
                    ))}
                </div>


                {/* Tech Stack List */}
                <div className="mt-12 flex flex-wrap gap-4 justify-center max-w-4xl">
                    {orbitingSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-slate-200/60 hover:border-emerald-200 hover:bg-white/80 transition-all shadow-sm"
                        >
                            <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain" />
                            <span className="text-xs font-medium text-slate-700">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
