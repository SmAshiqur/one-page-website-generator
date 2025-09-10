/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-jaldi)', 'system-ui', 'sans-serif'],
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px', 
          lg: '1024px',
          xl: '1200px',  // Custom max width
          '2xl': '1200px', // Same for 2xl
        },
      },
    },
    plugins: [],
  }