module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": "DM Sans",
      },
      colors: {
        blue: "#482BE7",
        border: "#EBEAED",
        tab: "#15143966",
        "tab-active": "#1E0E62",
        green: "#25DAC5",
        "sky-blue": "#1DA1F2",
        "separator-text": "#141414"
      }
    }
  }
};
