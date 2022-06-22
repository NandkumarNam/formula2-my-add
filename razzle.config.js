'use strict';

const util = require('util');
const path = require('path');

module.exports = {
  plugins: [
    'scss',
    {
      name: 'bundle-analyzer',
      options: {
        analyzerHost: '0.0.0.0',
      },
    },
  ],
  modify: (config, { target, dev }, webpack) => {
    // do something to config
    if (dev) {
      const JStest = config.module.rules[1].use;
      JStest.push({
        loader: 'eslint-loader',
        options: {
          cache: false,
          configFile: path.join(__dirname, '.eslintrc'),
          fix: true,
        },
      });
      // console.log(util.inspect(webpack, { showHidden: false, depth: null }));
    }

    return config;
  },
};
