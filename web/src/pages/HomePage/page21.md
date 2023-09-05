## ASIDE - ALLOW MARKDOWN FILES IN WEBPACK

In order to get Storybook to work with Markdown files, we need to add a loader to the Webpack configuration.

1. yarn rw setup webpack
2. modify web/config/webpack.config.js

```
  // Add custom rules for your project
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
  })
  ```
