import React, { useState} from 'react';
import { Download, Copy, Check, Info } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ChevronLeft, ChevronRight, Maximize2, X, ExternalLink} from 'lucide-react';
// 1. Текстовый блок
export const TheoryText = ({ children }) => (
    <p className="text-slate-300 leading-relaxed text-lg mb-6">
        {children}
    </p>
);


// 2. Изображение с продвинутым зумом
export const TheoryImage = ({ src, alt = "Иллюстрация" }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <>
            {/* Маленькое изображение (Превью) */}
            <div
                className="relative my-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in group bg-[#020617]"
                onClick={() => setIsZoomed(true)}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full object-cover max-h-[500px] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Индикатор зума при наведении */}
                <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={18} />
                </div>

                {/* Легкий градиент снизу для эстетики */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Модальное окно (Зум) — стиль как в Carousel */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in duration-300"
                    onClick={() => setIsZoomed(false)}
                >
                    {/* Кнопка закрытия */}
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                        <X size={40} />
                    </button>

                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                    />

                    {/* Подпись в зуме */}
                    <div className="absolute bottom-10 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-center">
                        <p className="text-sm font-medium tracking-wide">{alt}</p>
                    </div>
                </div>
            )}
        </>
    );
};

// 3. Блок кода с подсветкой и копированием
export const CodeSnippet = ({ code, language = 'javascript' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6">
            <div className="absolute right-4 top-4 z-10">
                <button
                    onClick={handleCopy}
                    className="p-2 bg-white/10 hover:bg-blue-600 rounded-lg transition-all text-white backdrop-blur-md border border-white/10"
                >
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl text-sm font-mono">
                <SyntaxHighlighter
                    language={language}
                    style={atomDark}
                    customStyle={{ margin: 0, padding: '1.5rem', background: '#020617' }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

// 4. Карточка скачивания файла
export const FileDownload = ({ name, size, url = "#" }) => (
    <a
        href={url}
        download
        className="flex items-center justify-between p-4 my-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group"
    >
        <div className="flex items-center gap-4">
            <div className="p-3 bg-[#0a192f] rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                <Download size={20} />
            </div>
            <div>
                <div className="text-sm font-medium text-white">{name}</div>
                <div className="text-xs text-slate-500">{size}</div>
            </div>
        </div>
        <span className="text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
      СКАЧАТЬ
    </span>
    </a>
);

// 5. Инфо-панель (Заметки/Tips)
export const InfoPanel = ({ title = "Важно", children }) => (
    <div className="my-6 p-5 rounded-2xl bg-blue-500/10 border-l-4 border-blue-500 flex gap-4">
        <div className="text-blue-400 shrink-0">
            <Info size={24} />
        </div>
        <div>
            <h5 className="font-bold text-blue-300 mb-1">{title}</h5>
            <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
        </div>
    </div>
);
// 6. Галерея изображений (Сетка)
export const ImageGrid = ({ images }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {images.map((img, idx) => (
            <div
                key={idx}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-500 cursor-zoom-in shadow-lg"
            >
                <img
                    src={img.url}
                    alt={img.alt || "Screenshot"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Оверлей с подписью при наведении */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-medium text-white/80">{img.alt}</span>
                </div>
            </div>
        ))}
    </div>
);
// 7. Слайдер изображений (Full-width с зумом)
export const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className="my-8 group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#020617]">
                {/* Основное изображение — клик открывает зум */}
                <div
                    className="relative cursor-zoom-in aspect-video"
                    onClick={() => setIsZoomed(true)}
                >
                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Кнопка индикации возможности зума */}
                    <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={18} />
                    </div>

                    {/* Градиентный оверлей для текста */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                        <p className="text-white text-lg font-bold">
                            {images[currentIndex].alt}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <span className="text-blue-400 text-xs font-mono tracking-tighter">
                                STEP {currentIndex + 1} / {images.length}
                            </span>
                            <div className="flex gap-1">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1 rounded-full transition-all ${currentIndex === idx ? 'w-4 bg-blue-500' : 'w-1 bg-white/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Кнопки навигации */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 hover:bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm border border-white/10"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 hover:bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm border border-white/10"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Модальное окно (Зум) */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-[100] bg-black/fb flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in duration-300"
                    onClick={() => setIsZoomed(false)}
                >
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                        <X size={40} />
                    </button>

                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].alt}
                        className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg"
                    />

                    <div className="absolute bottom-10 text-white text-center">
                        <h4 className="text-xl font-bold">{images[currentIndex].alt}</h4>
                        <p className="text-white/50 text-sm mt-2">Нажмите в любое место, чтобы закрыть</p>
                    </div>
                </div>
            )}
        </>
    );
};

// 8. Карточка внешней ссылки (стиль как у загрузки файла)
export const ExternalLinkCard = ({ name, description, url = "#" }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 my-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group text-left"
    >
        <div className="flex items-center gap-4">
            <div className="p-3 bg-[#0a192f] rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                <ExternalLink size={20} />
            </div>
            <div>
                <div className="text-sm font-medium text-white">{name}</div>
                {description && <div className="text-xs text-slate-500">{description}</div>}
            </div>
        </div>
        <span className="text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
            Открыть
        </span>
    </a>
);