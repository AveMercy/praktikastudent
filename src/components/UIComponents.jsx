import React, { useState } from 'react';
import { Download, Copy, Check, Info } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// 1. Текстовый блок
export const TheoryText = ({ children }) => (
    <p className="text-slate-300 leading-relaxed text-lg mb-6">
        {children}
    </p>
);

// 2. Изображение с оформлением
export const TheoryImage = ({ src, alt = "Иллюстрация" }) => (
    <div className="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img src={src} alt={alt} className="w-full object-cover max-h-[500px]" />
    </div>
);

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