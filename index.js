const merge = require('deepmerge');

module.exports = ({ config }, options = {}) => {
  const context = config.module
    .rule('markdown')
    .test(/\.md$/);

  context
    .use('html-loader')
      .loader(require.resolve('html-loader'))
      .options(merge({ name: '[name].[ext]' }, options));

  context
    .use('markdown-loader')
      .loader(require.resolve('markdown-loader'))
      .options(merge({ name: '[name].[ext]' }, options));
}
