'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Linkをインポート
import { worksData } from '@/lib/data'; // データのインポート元を変更

export default function WorksSection() {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <section className="py-20 px-8 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {worksData.map((work) => (
                        <Link href={`/works/${work.id}`} key={work.id}>
                            <motion.div
                                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg h-full cursor-pointer"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={work.imageUrl}
                                    alt={work.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">{work.title}</h3>
                                    <p className="text-gray-300 mb-4">{work.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {work.tags.map((tag) => (
                                            <span key={tag} className="bg-teal-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}