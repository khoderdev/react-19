/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      green: {
        pri: "#34d399",
        sec: "#22c55e",
      },

      yellow: {
        pri: "#eab308",
        light: "##ffc81e",
      },

      blue: {
        pri: "#06b6d4",
        sec: "#3b82f6",
      },
      red: {
        pri: "#ef4444",
      },

      white: {
        bg: "#f6f6f6",
        contents: "#c8c8c8",
        fg: "#fff",
        text: "#e5e7eb",
        input: "#bcbcbc",
        shadow: "#00a65100",
      },

      black: {
        bg: "#030712",
        fg: "#393939",
        contents: "#111827",
        text: "#1F2937",
        input: "#303134",
        border: "#dfe1e500",
        shadow: "#171717",
        test2: "#393939",
        test3: "#282828",
        test4: "#212121",
      },
      shadow: {
        black: "0 1px 6px 0 #171717",
      },
    },
    extend: {},
  },
  plugins: [],
};
