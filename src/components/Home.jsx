import React from 'react';
import { Terminal, Layers } from 'lucide-react';
import { TheoryText, InfoPanel } from './UIComponents';

const Home = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                Основная информация
            </h2>

            <div className="grid gap-8">
                <section className="p-8 rounded-[2.5rem] bg-blue-600/5 border border-blue-500/20">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                        <Terminal size={24}/> Сдача заданий
                    </h3>
                    <TheoryText>
                        Все практические работы проверяются на паре или отправляются в личные сообщения/группу в max.
                    </TheoryText>

                    {/* <div className="mt-6 flex flex-wrap gap-4">
                        <a href="https://t.me/avemercy" target="_blank" rel="noreferrer"
                           className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                            Отправить в Max
                        </a>
                        <a href="https://t.me/avemercy" target="_blank" rel="noreferrer"
                           className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                            Отправить в Telegram
                        </a>

                    </div>
                    */}
                </section>

                <section className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
                        Полезные инструменты
                    </h3>
                    <div className="space-y-4">
                        {[
                            {name: "React.dev", url: "https://react.dev/", desc: "официальная документация React"},
                            {name: "Vitejs.dev", url: "https://vitejs.dev/", desc: "официальная документация Vite"},
                            {
                                name: "Sequelize Docs",
                                url: "https://sequelize.org/docs/v6/core-concepts/model-basics/",
                                desc: "всё о связях в БД и моделях"
                            },
                            {
                                name: "Figma Community",
                                url: "https://www.figma.com/community",
                                desc: "готовые UI-киты от профессионалов"
                            },
                            {
                                name: "Refero.design",
                                url: "https://refero.design/",
                                desc: "огромная база реальных интерфейсов для насмотренности"
                            },
                            {
                                name: "Behance.net",
                                url: "https://www.behance.net/",
                                desc: "крупнейшая соцсеть для креативных профессионалов"
                            },
                            {
                                name: "Postman Learning",
                                url: "https://learning.postman.com/",
                                desc: "отличные уроки по тестированию API"
                            },
                            {
                                name: "Learn JavaScript",
                                url: "https://learn.javascript.ru/",
                                desc: "лучший русскоязычный ресурс по JS для Fullstack"
                            },
                        ].map((item, index) => (
                            <div key={index}
                                 className="group flex flex-col md:flex-row md:items-center gap-2 p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-white/5">
                                <span className="text-slate-600 font-mono text-xs">{index + 1}.</span>

                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 font-bold hover:text-blue-300 transition-colors underline decoration-blue-500/30 underline-offset-4 hover:decoration-blue-400"
                                >
                                    {item.name}
                                </a>

                                <span
                                    className="text-slate-400 text-sm md:ml-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    — {item.desc}
                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Home;