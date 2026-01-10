/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0a192f',
                    deep: '#112240',
                    blue: '#3b82f6',
                    light: '#60a5fa',
                }
            },
        },
    },
    plugins: [],
}