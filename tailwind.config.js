module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./store/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans Lao', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
  }
}