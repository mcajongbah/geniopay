module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#017189",
        body: '#2b4146',
        title: '#001b21',
      },
      screens: {
        'sm': '640px',
        'md': '960px',
        'lg': '1440px',
      }
    },
  },
  plugins: [],
};
