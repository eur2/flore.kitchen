import { defineCollection, z } from 'astro:content';

// const posts = defineCollection({
// 	schema: z.object({
// 		category: z.string(),
// 		title: z.string(),
// 		draft: z.boolean(),
// 		date: z.date(),
// 		contributor: z.string(),
// 	}),
// });
// const contributors = defineCollection({
// 	schema: z.object({
// 		title: z.string(),
// 	}),
// });
const intro = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		templateKey: z.string(),
		title: z.string()
	}),
});
// const prestations = defineCollection({
// 	// Type-check frontmatter using a schema
// 	schema: z.object({
// 		templateKey: z.string(),
// 		title: z.string(),
// 		menu: z.array(z.object())
// 	}),
// });
const references = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		templateKey: z.string(),
		title: z.string(),
		image: image()
	}),
});
export const collections = { intro, references };
