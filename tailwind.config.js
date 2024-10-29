// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
    ".src/stories/**/*.{js,jsx,ts,tsx}", // Ensure Storybook can find your stories
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary, #1E40AF)',
        secondary: 'var(--color-secondary, #9333EA)',
        text: {
          base: 'var(--text-base, #333333)',
          muted: 'var(--text-muted, #888888)',
          heading: 'var(--text-heading, #111111)',
        },
      },
      fontSize: {
        base: 'var(--font-size-base, 1rem)',
        lg: 'var(--font-size-lg, 1.25rem)',
        xl: 'var(--font-size-xl, 1.5rem)',
      },
      spacing: {
        sm: 'var(--spacing-sm, 4px)',
        md: 'var(--spacing-md, 8px)',
        lg: 'var(--spacing-lg, 16px)',
      },
      screens: {
        sm: 'var(--breakpoint-sm, 640px)',
        md: 'var(--breakpoint-md, 768px)',
        lg: 'var(--breakpoint-lg, 1024px)',
        xl: 'var(--breakpoint-xl, 1280px)',
      },
    },
  },
};
