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


  ```

## Style Dictionary 

### 1. Token Configuration for Generating Style token according to figma or sketch its turn out to be very helpful 🖌️

Customize your `\tokens\token.json` file. This files allows you to change ur theme in single build 

```js
{
  "color": {
    "primary": {
      "50": { "value": "#F2E7FE" },
      "100": { "value": "#D7B7FD" },
      "200": { "value": "#D7B7FD" },
      "300": { "value": "#BB86FC" },
      "400": { "value": "#7F22FD" },
      "500": { "value": "#6202EE" },
      "600": { "value": "#4B01D1" },
      "700": { "value": "#3700B3" },
      "800": { "value": "#280096" },
      "900": { "value": "#190078" }
    },
}
}
```

which generate token in `styles\variable.css` file using script in `config.js` make sure when u change some thing in `token.json` 
locally you have run the following command:
```bash
npm run build:tokens
```