'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section className="py-20 px-8 bg-gray-900">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Contact
                </h2>

                {/* Netlify Formsがこのフォームを認識するための設定 */}
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className="space-y-6"
                >
                    {/* Netlifyがフォームを正しく処理するために必要な隠しフィールド */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label>
                            Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                    </p>

                    {/* 名前入力フィールド */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* メールアドレス入力フィールド */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>

                    {/* メッセージ入力フィールド */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        ></textarea>
                    </div>

                    {/* 送信ボタン */}
                    <div>
                        <motion.button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-4 rounded-md transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
}