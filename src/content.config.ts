import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['labels', 'stickers']),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    description: z.string(),
    applications: z.array(z.string()).default([]),
    materials: z.array(z.string()).default([]),
    printingMethods: z.array(z.string()).default([]),
    finishes: z.array(z.string()).default([]),
    customization: z.array(z.string()).default([]),
    moq: z.string().default('From 50 units'),
    leadTime: z.string().default('Typically 7–12 working days after artwork approval'),
    relatedProducts: z.array(z.string()).default([]),
    knowledgeLinks: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    imageAlt: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    status: z.enum(['draft', 'review', 'published']).default('published'),
    lastVerified: z.string().optional(),
    order: z.number().default(50),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    description: z.string(),
    products: z.array(z.string()).default([]),
    painPoints: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    order: z.number().default(50),
  }),
});

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum(['label-sizing', 'label-cost', 'label-materials', 'sticker-materials', 'printing', 'artwork', 'marketplace-labels']),
    order: z.number().default(50),
    updated: z.string().default('2026-11'),
    relatedProducts: z.array(z.string()).default([]),
    view: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { products, industries, knowledge };
