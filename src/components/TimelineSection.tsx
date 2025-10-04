'use client';
import Link from "next/link";
import { motion } from "framer-motion";

export default function TimelineSection() {
    const events = [
        { date: "2021.04", title: "高校入学", description: "", link: "" },
        { date: "2022.03", title: "Sechack365'21表現駆動コース修了", description: "1年間を通して、セキュリティに関連したプロダクトを作成するハッカソンを行いました。", link: "https://sechack365.nict.go.jp/achievement/2021/" },
        { date: "2023.04", title: "大学入学", description: "専修大学ネットワーク情報学部ネットワーク情報学科に入学。" },
        { date: "2023.04~", title: "長期インターン開始", description: "N中等部にて、プログラミングTAとして生徒にプログラミングを現在まで教えています。", link: "https://n-jr.jp/" },
        { date: "2024.04.01", title: "専修大学電子計算機研究会の幹部に就任", description: "", },
        { date: "2024.06.20", title: "学内の無人コンビニ「NEst.」設立に寄与", description: "コンビニでの商品データから、GASを用いたデータ分析を行いました。また、学内の卒業演習発表会時に教授へ向けて発表を行いました。", link: "https://www.senshu-u.ac.jp/news/nid00022792.html" },
        { date: "2024.07.05", title: "ICPC 国内予選 2024 Yokohama 予選出場", description: "競技プログラミングの大会の予選に出場し、202位という結果となりました。", link: "https://www.senshu-u.ac.jp/news/nid00022792.html" },
        { date: "2024.10", title: "インターン先にて、ワークショップを企画・運営", description: "参加者は10人程度。事前に操作体験を交えたスライドを用意し、実際に手を動かしながら学べる形式にしたことで、参加者からは「分かりやすく楽しかった」と好評をいただきました。企画から運営までを通じて、限られた時間の中で理解してもらうための伝え方や進行管理の重要性を学びました。" },
        { date: "2024.11.09,10", title: "「Discordbotを作ろう！in 専修大学」ハッカソンにて優秀賞受賞", description: "2daysでのハッカソンにて、1v1のゲームができるDiscordBotを作成しました。4人チームで開発をし、私は主にバックエンドを担当しました。", link: "https://connpass.com/event/332972/" },
        { date: "2025.04.01", title: "専修大学電子計算機研究会の副代表に就任", description: "", },
        { date: "2025.04.01", title: "ITパスポート取得", description: "", },
        { date: "2025.04.12", title: "学生団体交流会【春】に参加", description: "株式会社サポーターズ主催の学生団体交流会に参加しました。", link: "https://talent.supporterz.jp/events/ade10524-56e7-4e56-aebf-eac483bb6848/" },
        { date: "2025.05.23", title: "学内向けハッカソンの開催", description: "「ゲームを作ろう」をテーマに学内向けの初心者を対象とした学部を問わずに約10名を集め、1日完結型のハッカソンを開催しました。企画から制作・発表までを行い、交流と学びの場を提供しました。", link: "https://project.ne.senshu-u.ac.jp/2025/03/" },
        { date: "2025.09.29", title: "学生団体交流会【秋】に参加", description: "株式会社サポーターズ主催の学生団体交流会に参加しました。", link: "https://talent.supporterz.jp/events/ade10524-56e7-4e56-aebf-eac483bb6848/" },
        // { date: "yyyy.mm.dd", title: "", description: "", link: "" },
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
                                <time className="block text-sm text-teal-400 mb-2">{event.date}</time>
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
