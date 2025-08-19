'use client';
import { motion } from 'framer-motion';

export default function ProfileSection() {
    return (
        <section id="profile" className="py-20 px-8 bg-gray-800">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeInOut' as const }}
            >
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    About Me
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                    ここに自己紹介文を記述します。
                </p>
            </motion.div>
        </section>
    );
}