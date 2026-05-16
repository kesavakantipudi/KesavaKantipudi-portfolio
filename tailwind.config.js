export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.24), transparent 35%), radial-gradient(circle at right center, rgba(14, 165, 233, 0.18), transparent 28%)'
      }
    }
  },
  plugins: []
};
