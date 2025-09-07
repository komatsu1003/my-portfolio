'use client';

import { worksData } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = { id: string };

export default function ClientWorkDetail({ id }: Props) {
    const workId = parseInt(id, 10);
    const work = worksData.find((item) => item.id === workId);

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
                {/* Back to Worksページ */}
                <Link
                    href="/works"
                    className="text-teal-400 hover:underline mb-8 inline-block"
                >
                    ← Back to Works
                </Link>
                {/* 日付 */}
                <time className="text-sm text-teal-300 mb-2 block">{work.date}</time>

                {/* タイトル */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{work.title}</h1>


                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {work.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-teal-600 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* 画像 */}
                <Image
                    src={work.imageUrl}
                    alt={work.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg mb-8 shadow-lg"
                />

                {/* セクション */}
                <div className="mt-8 space-y-8">
                    {work.sections.map((section) => (
                        <div key={section.heading}>
                            <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
                            <p className="text-gray-300">{section.content}</p>
                        </div>
                    ))}
                </div>

                {/* GitHub / Demoボタン */}
                <div className="mt-12 flex gap-4">
                    {work.githubUrl && (
                        <a
                            href={work.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                    {work.demoUrl && (
                        <a
                            href={work.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded transition-colors"
                        >
                            View Demo
                        </a>
                    )}
                </div>
            </motion.div>
        </main>
    );
}
