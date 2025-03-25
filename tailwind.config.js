/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e1a254', 
        'secondary': '#8c785a', 
        'accent': '#d4d4a4', 
        'bgdark': '#a9a493',
        'bglight': '#efe7cb', 
        'text-primary': '#3f3e33', 
        'text-secondary': '#a9a493',
      },
      fontFamily: {
        'sans': ['Montserrat','Roboto', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'montserrat': ['Montserrat','sans-serif'],
        'baskerville': ['Libre Baskerville','serif'],
      },
      borderRadius: {
        'xl': '1rem', 
      },
      boxShadow: {
        'inner': 'inset 0 0 15px rgba(0, 0, 0, 0.1)', 
      },
      transitionDuration: {
        '900': '900ms',
      },
    },
  },
  plugins: [],
}

