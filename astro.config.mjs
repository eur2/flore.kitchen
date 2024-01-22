import { defineConfig, passthroughImageService } from "astro/config";
import partytown from "@astrojs/partytown";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});

// import { visit } from "unist-util-visit";

// function fixRelativeLinksFromObsidianToAstro(options) {
//   function visitor(node) {
//     if (node.url.startsWith("http") || node.url.startsWith("/images/")) {
//       return;
//     }

//     if (!node.url.startsWith("/")) {
//       node.url = "./" + node.url;
//     }
//   }

//   function transform(tree) {
//     visit(tree, "image", visitor);
//   }

//   return transform;
// }

// export default defineConfig({
//   markdown: {
//     remarkPlugins: [[fixRelativeLinksFromObsidianToAstro, {}]],
//   }
//   });
