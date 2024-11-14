export default {
  source: ['tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          // options: {
          //   // Look here 👇
          //   outputReferences: (token, { dictionary, usesDtcg }) => {
          //     // `dictionary` contains `allTokens`, `tokens` and `unfilteredTokens` props
          //     // `usesDtcg` tells you whether the Design Token Community Group spec is used with $ prefixes ($value, $type etc.)
          //     // return true or false
          //   },
          // },
        },
      ],
    },
  },
};