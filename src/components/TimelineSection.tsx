'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function TimelineSection() {
    const events = [
        { year: "2021", title: "大学入学", description: "情報工学を専攻し始めました。", link: "/works/1" },
        { year: "2022", title: "個人開発", description: "React / Next.js を学習し、初めてのポートフォリオを作成。", link: "/works/2" },
        { year: "2023", title: "インターン参加", description: "Web開発のインターンで実務経験を積みました。", link: "/works/3" },
        { year: "2024", title: "インターン参加", description: "Web開発のインターンで実務経験を積みました。" } // linkなし
    ];

    return (
        <section id="timeline" className="py-16 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Timeline</h2>
                <div className="relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-teal-500 h-full"></div>

                    {events.map((event, index) => {
                        const cardContent = (
                            <div className="p-6 rounded-xl shadow-lg overflow-hidden">
                                <time className="block text-sm text-teal-400 mb-2">{event.year}</time>
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <p className="mt-2 text-gray-300">{event.description}</p>
                            </div>
                        );

                        return (
                            <div
                                key={index}
                                className={`mb-12 flex w-full justify-${index % 2 === 0 ? "start" : "end"}`}
                            >
                                <div className={`w-5/12 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                                    {event.link ? (
                                        <Link href={event.link}>
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                transition={{ duration: 0.3 }}
                                                className="cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-colors"
                                            >
                                                {cardContent}
                                            </motion.div>
                                        </Link>
                                    ) : (
                                        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden p-0">
                                            {cardContent}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
