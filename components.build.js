// TODO: break this up: https://paulund.co.uk/create-config-files-for-vuejs

const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
// vue.config.js

module.exports = {
  outputDir: 'dist/wc',
  publicPath: '/components/',
  css: {
    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    // modules: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    // loaderOptions: {
    //   sass: {
    //     prependData: `@import "@/shared/styles/_base.scss";`,
    //   },
    // },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .tap((options) => {
        options = {
          ...options,
          svgo: {
            plugins: [
              { removeXMLNS: true },
              {
                removeAttributesBySelector: {
                  selector: 'svg[class]',
                  attributes: 'class',
                },
              },
            ],
          },
        };
        return options;
      })
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap((options) => {
        options = {
          ...options,
          extract: false,
        };
        return options;
      })
      .end();
  },
  configureWebpack: (baseConfig, env, defaultConfig) => {
    defaultConfig = {
      ...baseConfig,
      resolve: {
        extensions: ['.js', '.vue', '.json', '.svg'],
        alias: {
          // {{#if_eq build "standalone"}}
          // 'vue$': 'vue/dist/vue.esm.js',
          // {{/if_eq}}
          '@': path.resolve(__dirname, 'src'),
        },
        modules: ['src/assets/svg'],
      },
      module: {
        rules: [
          // {
          //   test: /\.scss$/,
          //   loader: ['vue-style-loader', 'css-loader', 'sass-loader'],
          // },
          {
            test: /\.css$/,
            loader: ['vue-style-loader', 'css-loader'],
          },
          // {
          //   test: /\.vue$/,
          //   loader: 'vue-loader',
          // },
        ],
      },
      output: {
        filename: 'js/[name].js',
        // path: path.resolve(__dirname, 'lib'),
      },
      plugins: [],
    };
    return defaultConfig;
  },
};
