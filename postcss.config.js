export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  extend: {
  animation: {
    fadeIn: 'fadeIn 1s ease-in-out',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
}

}
