module.exports = {
  content: ["./src/**/*.{html,js}", "./docs/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      animation: {
        'gradient-border': 'gradient-rotate 4s linear infinite'
      },
      keyframes: {
        'gradient-rotate': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      }
    }
  },
  plugins: [],
}
