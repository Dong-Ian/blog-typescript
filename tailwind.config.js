export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  output: "./src/styles/output.css",
  corePlugins: {
    preflight: false, // Tailwind의 기본 reset 비활성화
  },
};
