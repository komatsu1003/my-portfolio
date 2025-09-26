// src/components/ContactsSection.tsx
export default function ContactsSection() {
    return (
        <section id="contacts" className="py-20 px-8 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Contacts</h2>

                <div className="flex justify-center gap-8 flex-wrap">
                    {/* Gmail */}
                    <a
                        href="mailto:komaken4649@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform hover:scale-110"
                    >
                        <img
                            src="https://skillicons.dev/icons?i=gmail&theme=dark"
                            alt="Gmail"
                            className="w-16 h-16"
                        />
                    </a>

                    {/* X (Twitter) */}
                    <a
                        href="https://x.com/Dmino_1003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform hover:scale-110"
                    >
                        <img
                            src="https://simpleicons.org/icons/x.svg"
                            alt="X"
                            className="w-16 h-16 bg-white rounded-xl p-2"
                        />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/komatsu1003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform hover:scale-110"
                    >
                        <img
                            src="https://skillicons.dev/icons?i=github&theme=dark"
                            alt="GitHub"
                            className="w-16 h-16"
                        />
                    </a>

                    {/* Qiita（公式アイコンはskilliconsに無いので代替） */}
                    <a
                        href="https://qiita.com/kensei1003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform hover:scale-110"
                    >
                        <img
                            src="https://simpleicons.org/icons/qiita.svg"
                            alt="Qiita"
                            className="w-16 h-16 bg-green-500 rounded-xl p-2"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
