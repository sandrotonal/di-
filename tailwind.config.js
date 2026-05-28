/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2ED',
        teal: {
          50: '#f0f7f7',
          100: '#d1e8e8',
          200: '#a3d1d1',
          300: '#6db4b4',
          400: '#4a9a9a',
          500: '#3D7B80',
          600: '#2d6368',
          700: '#1f4a4e',
          800: '#123236',
          900: '#091c1f'
        },
        gold: {
          50: '#faf6ef',
          100: '#f0e6ce',
          200: '#e0cd9e',
          300: '#D4B872',
          400: '#C9A96E',
          500: '#b8954e',
          600: '#9a7838',
          700: '#7a5d2a',
          800: '#5c4320',
          900: '#3e2b16'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    }
  },
  plugins: []
};
