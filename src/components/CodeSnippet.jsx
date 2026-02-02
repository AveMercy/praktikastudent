import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// Кастомная тема в стиле WebStorm (Darcula)
const webStormTheme = {
    'comment': { color: '#808080', fontStyle: 'italic' },
    'keyword': { color: '#CC7832' }, // const, let, return, function - Оранжевый
    'string': { color: '#6A8759' },  // "текст" - Зеленый
    'number': { color: '#6897BB' },  // цифры - Бирюзовый/Голубой
    'function': { color: '#FFC66D' }, // названия функций - Желтый
    'operator': { color: '#A9B7C6' },
    'class-name': { color: '#FFC66D' },
    'boolean': { color: '#CC7832' },
    'parameter': { color: '#A9B7C6' },
    'interpolation': { color: '#A9B7C6' },
};

export const CodeSnippet = ({ code, language = 'javascript' }) => (
    <div className="relative my-6 group">
        <div className="rounded-2xl overflow-hidden border border-white/5 shadow-inner">
            <SyntaxHighlighter
                language={language}
                style={webStormTheme}
                customStyle={{
                    background: '#1E1F22', // Фон WebStorm New UI
                    padding: '1.5rem',
                    margin: 0,
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    </div>
);