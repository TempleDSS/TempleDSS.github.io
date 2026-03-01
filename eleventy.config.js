const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  // SCSS compilation via eleventy-sass plugin
  // This watches _sass/ and compiles assets/css/main.scss -> css/main.css
  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: ["_sass"],
    },
  });

  // Copy static assets without processing
  eleventyConfig.addPassthroughCopy("assets/js");

  // Don't process README as a page
  eleventyConfig.ignores.add("README.md");

  // Tell 11ty which template formats to process
  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
