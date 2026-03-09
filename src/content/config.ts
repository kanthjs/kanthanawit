import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(['TO READ', 'READING', 'READ']),
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    category: z.string(),
    image: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const hobbies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['plants', 'hobbies', 'work-gear', 'personal-gear']),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    url: z.string().url().optional(),
    affiliate: z.boolean().optional(),
  }),
});

const myapp = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    category: z.string(),
    image: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const rpackages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { books, writing, projects, hobbies, myapp, rpackages };
