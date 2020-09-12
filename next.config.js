/* eslint-disable no-param-reassign */
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;

const styledComponentsTransformer = createStyledComponentsTransformer();
module.exports = {
  poweredByHeader: false,
  webpack: (config, options) => {
    /** Allows import modules from packages in workspace. */
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        { test: /\.svg$/, use: 'react-svg-loader' },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: options.defaultLoaders.babel
        }
      ]
    };
    return config;
  }
};
