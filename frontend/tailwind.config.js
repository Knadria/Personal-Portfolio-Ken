// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}