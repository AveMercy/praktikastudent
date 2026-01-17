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
                        <Terminal size={24} /> Сдача заданий
                    </h3>
                    <TheoryText>
                        Все практические работы проверяются на паре или отправляются в личные сообщения/группу в max.
                    </TheoryText>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <a href="https://t.me/avemercy" target="_blank" rel="noreferrer"
                           className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                            Отправить в Max
                        </a>
                        <a href="https://t.me/avemercy" target="_blank" rel="noreferrer"
                           className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                            Отправить в Telegram
                        </a>

                    </div>
                </section>

                <section className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-4"></h3>
                    <div className="space-y-4">
                        <InfoPanel title="Полезные ресурсы">
                           1
                        </InfoPanel>
                    </div>
                </section>
            </div>
        </div>
    );
};

// Самое важное: один чистый экспорт компонента
export default Home;