'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function TimelineSection() {
    const events = [
        { year: "2020.04", title: "高校入学", description: "", link: "" },
        { year: "2022.03", title: "Sechack365'21表現駆動コース修了", description: "1年間を通して、セキュリティに関連したプロダクトを作成するハッカソンを行なった。", link: "https://sechack365.nict.go.jp/achievement/2021/" },
        { year: "2023.04", title: "大学入学", description: "専修大学ネットワーク情報学部ネットワーク情報学科に入学。" },
        { year: "2023.04~", title: "長期インターン開始", description: "N中等部にて、プログラミングTAとして生徒にプログラミングを現在まで教えている。", link: "https://n-jr.jp/" },
        { year: "2024.04", title: "専修大学電子計算機研究会の幹部に就任", description: "", },
        { year: "2024.06.20", title: "学内の無人コンビニ「NEst.」設立に寄与", description: "コンビニでの商品データから、GASを用いたデータ分析を行なった。また、学内の卒業演習発表会時に教授へ向けて発表を行なった。", link: "https://www.senshu-u.ac.jp/news/nid00022792.html" },
        { year: "2024.07.05", title: "ICPC 国内予選 2024 Yokohama 出場", description: "競技プログラミングの大会の予選に出場し、202位。", link: "https://www.senshu-u.ac.jp/news/nid00022792.html" }
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
