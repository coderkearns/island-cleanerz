import { defineConfig } from "vite";
import { minify } from "html-minifier-terser";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "",
  },
  plugins: [
    {
      name: "minify-html",
      transformIndexHtml: {
        order: "post",
        handler: (html) =>
          minify(html, {
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            removeEmptyAttributes: true,
          }),
      },
    },
  ],
});
