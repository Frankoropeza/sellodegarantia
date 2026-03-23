import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoria: z.string(),
    subcategoria: z.string().optional(),
    imagen: z.string().optional(),
    galeria: z.array(z.string()).optional(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    material: z.string().optional(),
    calibres: z.string().optional(),
    diametros: z.string().optional(),
    pedidoMinimo: z.string().optional(),
    tiempoEntrega: z.string().optional(),
    heroSeo1: z.string().optional(),
    heroSeo2: z.string().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readTime: z.string().optional(),
    location: z.string().optional(),
    author: z.string().default('Equipo Sello de Garantía'),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { productos, blog };
