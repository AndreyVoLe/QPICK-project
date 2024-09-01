/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                gr: '#EAEAEA',
                midnight: '#e5e7eb',
            },
        },
    },
    plugins: [],
}
