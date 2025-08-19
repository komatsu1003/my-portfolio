// src/components/SkillsSection.tsx
export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-8 bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold mb-6 text-teal-400 text-center">Frontend</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <img src="https://skillicons.dev/icons?theme=dark&i=html" alt="HTML" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=css" alt="CSS" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=js" alt="JavaScript" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=react" alt="React" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=nextjs" alt="Next.js" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=tailwind" alt="Tailwind CSS" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=figma" alt="Figma" />
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold mb-6 text-teal-400 text-center">Backend</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <img src="https://skillicons.dev/icons?theme=dark&i=nodejs" alt="Node.js" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=java" alt="Java" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=cpp" alt="C++" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=r" alt="R" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=processing" alt="Processing" />
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-semibold mb-6 text-teal-400 text-center">Tools & Others</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <img src="https://skillicons.dev/icons?theme=dark&i=git" alt="Git" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=github" alt="GitHub" />
                            <img src="https://skillicons.dev/icons?theme=dark&i=vscode" alt="VSCode" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
