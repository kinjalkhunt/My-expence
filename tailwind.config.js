/**@type {import('tailwindcss').Config}*/ 
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("tailwindcss-animate")], // Required for ShadCN animations
};
