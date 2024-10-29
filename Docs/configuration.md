# Configuration Guide ⚙️

This guide provides an overview of the key configuration files used in the project, including Rollup, Tailwind CSS, and PostCSS.

## Rollup Configuration 📦

The Rollup configuration is located in `rollup.config.js`. Here are the key settings:

- **Input**: Specifies the entry point of your library.
  - **Example**: 
    ```javascript
    input: 'src/index.js',
    ```

- **Output**: Defines where the bundled library will be generated.
  - **Example**: 
    ```javascript
    output: {
      dir: 'lib/',
      format: 'es', // or 'cjs' for CommonJS
    },
    ```

- **Plugins**: Enhances the build process by adding features.
  - **Includes**: PostCSS for styling.
  - **Example**: 
    ```javascript
    plugins: [
      postcss({
        plugins: [require('autoprefixer')],
      }),
    ],
    ```

## Tailwind CSS & PostCSS 🎨

### 1. Tailwind CSS Configuration 🖌️

Customize your Tailwind CSS setup in the `tailwind.config.js` file. This file allows you to adjust your theme, colors, and more.

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Add custom theme extensions here
    },
  },
  plugins: [],
};
