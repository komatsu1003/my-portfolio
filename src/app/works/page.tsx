'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { worksData } from '@/lib/data';

export default function WorksPage() {
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tagFilterMode, setTagFilterMode] = useState<'AND' | 'OR'>('OR');
    const [showFilter, setShowFilter] = useState(false);

    const allTags = Array.from(new Set(worksData.flatMap((work) => work.tags)));

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const filteredWorks = useMemo(() => {
        return worksData.filter((work) => {
            const matchesSearch = search
                ? work.title.toLowerCase().includes(search.toLowerCase()) ||
                work.description.toLowerCase().includes(search.toLowerCase())
                : true;

            const matchesTag =
                selectedTags.length === 0
                    ? true
                    : tagFilterMode === 'AND'
                        ? selectedTags.every((tag) => work.tags.includes(tag))
                        : selectedTags.some((tag) => work.tags.includes(tag));

            return matchesSearch && matchesTag;
        });
    }, [search, selectedTags, tagFilterMode]);

    return (
        <main className="min-h-screen bg-gray-900 text-white p-8">
            {/* ナビバー */}
            <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
                <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                    <h1 className="text-lg font-bold">My Portfolio</h1>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-teal-400">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* ページタイトル */}
            <div className="max-w-6xl mx-auto px-2 mt-20 mb-4">
                <h1 className="text-4xl font-bold text-left">成果物一覧</h1>
                <div className="mt-2 text-left">
                    <button
                        onClick={() => setShowFilter((prev) => !prev)}
                        className="text-teal-400 text-lg font-semibold hover:underline"
                    >
                        🔍 Filter
                    </button>
                </div>
            </div>
            {/* フィルター領域 */}
            <div className="max-w-6xl mx-auto mb-8">
                <AnimatePresence initial={false}>
                    {showFilter && (
                        <motion.div
                            key="filter-panel"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="bg-gray-800 rounded-lg overflow-hidden p-4 flex flex-col gap-4"
                        >
                            {/* 検索ワード */}
                            <motion.input
                                type="text"
                                placeholder="検索ワードでフィルター"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.05 }}
                            />

                            {/* タグ選択 */}
                            <motion.div
                                className="flex flex-wrap gap-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {allTags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${selectedTags.includes(tag)
                                            ? 'bg-teal-500 text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-teal-500 hover:text-white'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </motion.div>

                            {/* AND/OR切り替え */}
                            <motion.div
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                            >
                                <span>タグの条件:</span>
                                <button
                                    onClick={() => setTagFilterMode('AND')}
                                    className={`px-3 py-1 rounded-full font-semibold ${tagFilterMode === 'AND'
                                        ? 'bg-teal-500 text-white'
                                        : 'bg-gray-700 text-gray-300 hover:bg-teal-500 hover:text-white'
                                        }`}
                                >
                                    AND
                                </button>
                                <button
                                    onClick={() => setTagFilterMode('OR')}
                                    className={`px-3 py-1 rounded-full font-semibold ${tagFilterMode === 'OR'
                                        ? 'bg-teal-500 text-white'
                                        : 'bg-gray-700 text-gray-300 hover:bg-teal-500 hover:text-white'
                                        }`}
                                >
                                    OR
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* WorksSection */}
            <section id="works" className="py-8 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                layout
                                key={work.id}
                                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg h-full cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/works/${work.id}`}>
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
                                                <span
                                                    key={tag}
                                                    className="bg-teal-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                        {filteredWorks.length === 0 && (
                            <motion.p
                                className="text-center text-gray-400 col-span-full mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                条件に一致する成果物はありません。
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
}
