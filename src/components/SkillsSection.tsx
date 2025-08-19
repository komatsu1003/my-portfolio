'use client';
import { motion, Variants } from 'framer-motion';

const skillsData = [
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'React', level: 85 },
];

export default function SkillsSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="py-20 px-8 bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Skills
                </h2>
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillsData.map((skill) => (
                        <motion.div key={skill.name} variants={itemVariants}>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-gray-200">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-200">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <motion.div
                                    className="bg-teal-500 h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: 'easeOut' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}