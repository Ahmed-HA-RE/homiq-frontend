import z from 'zod';

export const projectSchema = z.object({
  _id: z.string(),
  title: z.string().trim().min(1).max(50),
  price: z.number().positive(),
  location: z.string().trim(),
  type: z.string().trim(),
  description: z.string().trim().min(4),
  area: z.string(),
  beds: z.number().min(1),
  floors: z.number().min(1).max(4),
  Bathrooms: z.number().min(1).max(10),
  amenities: z.array(z.string().trim().min(1)).min(1),
  parking: z.number().min(1).max(6),
  images: z.object({
    interior: z.array(z.string().trim().toLowerCase()).min(1),
    exterior: z.array(z.string().trim().toLowerCase()).min(1),
  }),
});

export type Project = z.infer<typeof projectSchema>;

export const pagenatedProjects = z.object({
  page: z.number(),
  limit: z.number(),
  total: z.number(),
  pages: z.number(),
  projects: z.array(projectSchema),
});

export type PaginatedProjects = z.infer<typeof pagenatedProjects>;
