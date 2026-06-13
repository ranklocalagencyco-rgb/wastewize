import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.coerce.date(),
    category:    z.string(),
    tags:        z.array(z.string()).optional(),
    author:      z.string().default('WasteWize Team'),
    featured:    z.boolean().default(false),
    faqSchema:   z.array(z.object({
      question: z.string(),
      answer:   z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
