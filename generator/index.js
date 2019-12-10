module.exports = (api, options) => {
  api.render('./template')

  api.extendPackage({
    scripts: {
      'lint': 'vue-cli-service lint'
    },
    dependencies: {
      'core-js': '^3.4.3',
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '^4.1.0',
      '@vue/cli-plugin-eslint': '^4.1.0',
      '@vue/cli-service': '^4.1.0',
      'babel-eslint': '^10.0.3',
      'eslint': '^5.16.0',
      'eslint-plugin-vue': '^5.0.0',
    },
    browserslist: [
      '> 1%',
      'last 2 versions'
    ]
  })

  api.postProcessFiles(files => {
    delete files['src/components/HelloWorld.vue']
  })
}
