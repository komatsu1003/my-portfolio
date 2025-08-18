export const runtime = 'edge';
'use client';

import { worksData } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type WorkDetailPageProps = {
    params: {
        id: string;
    };
};

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
    // URLのidを使って、対応する作品データを取得
    const workId = parseInt(params.id, 10);
    const work = worksData.find((item) => item.id === workId);

    // 作品が見つからない場合は404ページを表示
    if (!work) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white p-8">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Link href="/#works" className="text-teal-400 hover:underline mb-8 inline-block">
                    ← Back to Works
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">{work.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {work.tags.map((tag) => (
                        <span key={tag} className="bg-teal-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <Image
                    src={work.imageUrl}
                    alt={work.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg mb-8 shadow-lg"
                />

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>{work.longDescription}</p>
                </div>

                <div className="mt-12 flex gap-4">
                    {work.githubUrl && (
                        <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
                            GitHub
                        </a>
                    )}
                    {work.demoUrl && (
                        <a href={work.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded transition-colors">
                            View Demo
                        </a>
                    )}
                </div>
            </motion.div>
        </main>
    );
}