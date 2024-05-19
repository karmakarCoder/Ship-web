/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        workSans: "var(--workSans)",
        poppins: "var(--poppins)",
        waterBrush: "var(--waterBrush)",
      },
      colors: {
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        thirdColor: "var(--thirdColor)",
      },
    },
  },
  plugins: [],
};
