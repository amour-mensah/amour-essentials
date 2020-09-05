/* eslint-disable no-param-reassign */
const path = require('path');

const workspace = path.join(__dirname, '..');
module.exports = {
  poweredByHeader: false,
  webpack: (config, options) => {
    /** Allows import modules from packages in workspace. */
    config.module = {
      ...config.module,
      rules: [
        ...config.module.rules,
        { test: /\.svg$/, use: 'react-svg-loader' }
      ]
    };
    return config;
  }
};
