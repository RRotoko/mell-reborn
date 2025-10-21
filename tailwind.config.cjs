/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1418",
        teal: "#0EE6D2",
        textdim: "#B8C7CC"
      },
      fontFamily: {
        cond: ["EurostileCondensed","system-ui","sans-serif"]
      }
    }
  },
  plugins: []
};
