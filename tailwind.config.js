/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/stories/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },
      },
      fontSize: {
        h1: ['var(--typography-h1-fontSize)', 'var(--typography-h1-lineHeight)'],
        h2: ['var(--typography-h2-fontSize)', 'var(--typography-h2-lineHeight)'],
        h3: ['var(--typography-h3-fontSize)', 'var(--typography-h3-lineHeight)'],
        h4: ['var(--typography-h4-fontSize)', 'var(--typography-h4-lineHeight)'],
        h5: ['var(--typography-h5-fontSize)', 'var(--typography-h5-lineHeight)'],
        h6: ['var(--typography-h6-fontSize)', 'var(--typography-h6-lineHeight)'],
        body1: ['var(--typography-body1-fontSize)', 'var(--typography-body1-lineHeight)'],
        body2: ['var(--typography-body2-fontSize)', 'var(--typography-body2-lineHeight)'],
        subtitle1: ['var(--typography-subtitle1-fontSize)', 'var(--typography-subtitle1-lineHeight)'],
        subtitle2: ['var(--typography-subtitle2-fontSize)', 'var(--typography-subtitle2-lineHeight)'],
        caption: ['var(--typography-caption-fontSize)', 'var(--typography-caption-lineHeight)'],
        overline: ['var(--typography-overline-fontSize)', 'var(--typography-overline-lineHeight)'],
      },
    },
  },
  plugins: [],
};
