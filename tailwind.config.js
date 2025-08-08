/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // если используешь app directory (Next.js 13+)
    './pages/**/*.{js,ts,jsx,tsx}',  // если используешь pages directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '0',
      },
      screens: {
        md: '940px',
      },
    },
  },
  plugins: [],
};
