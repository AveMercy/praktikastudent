import React from 'react';
import {
    TheoryText,
    TheoryImage,
    CodeSnippet,
    FileDownload,
    InfoPanel,
    ImageGrid
} from '../components/UIComponents';

const Lesson1 = ({ mode }) => {
    // Массив скриншотов для галереи (файлы должны лежать в public/images/)
    const galleryImages = [
        { url: '/images/gallery-1.jpg', alt: 'Этап проектирования' },
        { url: '/images/gallery-2.jpg', alt: 'Настройка окружения' },
        { url: '/images/gallery-3.jpg', alt: 'Первый запуск' },
        { url: '/images/gallery-4.jpg', alt: 'Структура проекта' },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            {/* --- РЕЖИМ ТЕОРИИ --- */}
            {mode === 'theory' && (
                <article>
                    <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                        Введение в Fullstack разработку
                    </h2>

                    <TheoryText>
                        Добро пожаловать на курс! Мы пройдем путь от проектирования архитектуры до деплоя готового продукта.
                        Основной упор в первой части обучения мы сделаем на понимание того, как фронтенд общается с сервером.
                    </TheoryText>

                    {/* ГАЛЕРЕЯ */}
                    <div className="my-10">
                        <h3 className="text-xl font-bold mb-4 text-blue-400/80 uppercase tracking-widest text-sm">Обзор процесса:</h3>
                        <ImageGrid images={galleryImages} />
                    </div>

                    <InfoPanel title="Важное примечание">
                        Для успешного прохождения курса вам потребуется установленная Node.js версии 18+ и любая IDE (рекомендую WebStorm или VS Code).
                    </InfoPanel>

                    <TheoryImage
                        src="/images/lesson1-cover.png"
                        alt="Обложка занятия"
                    />

                    <TheoryText>
                        Начнем с инициализации нашего проекта. Мы используем Vite, так как это самый быстрый инструмент сборки на текущий момент.
                    </TheoryText>

                    <CodeSnippet
                        language="bash"
                        code={`npm create vite@latest my-awesome-app -- --template react\ncd my-awesome-app\nnpm install\nnpm run dev`}
                    />

                    <TheoryText>
                        После запуска вы увидите стандартную страницу приветствия. Это будет нашей отправной точкой.
                    </TheoryText>
                </article>
            )}

            {/* --- РЕЖИМ ФАЙЛОВ --- */}
            {mode === 'files' && (
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Материалы для скачивания</h2>
                    <TheoryText>Здесь вы найдете все необходимые документы и исходники для текущего занятия.</TheoryText>

                    <div className="grid grid-cols-1 gap-4">
                        <FileDownload
                            name="Методичка по Java.pdf"
                            size="2.4 MB"
                            url="/downloads/test.pdf"
                        />
                    </div>
                </div>
            )}

            {/* --- РЕЖИМ ПРАКТИКИ --- */}
            {mode === 'practice' && (
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Практическое задание</h2>

                    <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2rem]">
                        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                            Настройка окружения
                        </h3>
                        <TheoryText>
                            Создайте новый репозиторий на GitHub и свяжите его с вашим локальным проектом.
                            Отправьте первый коммит с текстом "Initial commit".
                        </TheoryText>

                        <CodeSnippet
                            language="bash"
                            code={`git add .\ngit commit -m "Initial commit"\ngit push origin main`}
                        />
                    </div>

                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem]">
                        <h3 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm">2</span>
                            Работа с компонентами
                        </h3>
                        <TheoryText>
                            Создайте в папке <code className="text-blue-400">src</code> новый компонент <strong>WelcomeCard.jsx</strong> и выведите его на главной странице.
                        </TheoryText>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson1;