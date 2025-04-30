// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   // darkMode: 'class',
//   // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   // theme: {
//   //   extend: {},
//   // },
//   plugins: [react(),tailwindcss(),
//   ],
// })

// viteconfig file
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    proxy: {
      '/api': 'http://localhost:8000', // or your server's URL
    },
  },
})
