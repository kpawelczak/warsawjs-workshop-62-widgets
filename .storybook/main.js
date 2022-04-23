module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/web-components",
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
      test: /\.handlebars$/,
      loader: "handlebars-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "raw-loader"],
        sideEffects: false,
      },
    );
    config.module.rules = config.module.rules
      .filter(item => item.test.toString() !== '/\\.css$/')

    return config
  }
};
