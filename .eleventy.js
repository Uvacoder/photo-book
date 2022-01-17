module.exports = function (eleventyConfig) {
  eleventyConfig.setPugOptions({ debug: false })

  // minify the html output
  eleventyConfig.addTransform('htmlmin', require('./minify-html.js'))

  // compress and combine js files
  eleventyConfig.addFilter('jsmin', function (code) {
    const UglifyJS = require('uglify-js')
    let minified = UglifyJS.minify(code)
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error)
      return code
    }
    return minified.code
  })

  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy({ static: '/' })

  return {
    dir: {
      input: 'pages',
      output: 'dist',
    },
    passthroughFileCopy: true,
  }
}
