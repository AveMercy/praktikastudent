export const CodeSnippet = ({ code }) => (
    <div className="relative my-6 group">
    <pre className="bg-[#020617] p-6 rounded-2xl text-cyan-400 overflow-x-auto font-mono text-sm border border-white/5 shadow-inner">
      <code>{code}</code>
    </pre>
    </div>
);