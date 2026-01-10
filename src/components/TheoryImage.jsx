export const TheoryImage = ({ src, alt = "Иллюстрация" }) => (
    <div className="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img src={src} alt={alt} className="w-full object-cover max-h-[500px]" />
    </div>
);