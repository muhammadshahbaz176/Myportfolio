module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        cyan: {
          400: "#fb923c", // Orange 400
          500: "#f97316", // Orange 500
          600: "#ea580c", // Orange 600
        },
        navy: {
          900: "#0a0a1a",
          950: "#030712",
        }
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "fadeInUp": "fadeInUp 0.8s ease forwards",
        "fadeInLeft": "fadeInLeft 0.8s ease forwards",
        "fadeInRight": "fadeInRight 0.8s ease forwards",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
