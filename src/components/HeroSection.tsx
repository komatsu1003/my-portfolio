'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const fadeInAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <main
            id="hero"
            className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900 text-white scroll-mt-20"
        >
            <div className="text-center space-y-6">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight"
                    variants={fadeInAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Kensei Komatsu
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-gray-300"
                    variants={fadeInAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Turning code into creation.
                </motion.p>
            </div>
        </main>
    );
}
