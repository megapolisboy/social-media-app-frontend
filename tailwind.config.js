module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added by Albert(please don`t blame me)
        "main-content": "4fr 1fr",
        "cards-1": "repeat(4, 300px)",
        "card-2": "repeat(1, 300px)",
      },
      gridTemplateRows: {
        r1: "repeat(2, 350px)",
        form: "40px 75px 175px 75px 55px 40px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
