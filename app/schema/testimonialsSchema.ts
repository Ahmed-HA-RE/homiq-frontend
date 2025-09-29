import z from 'zod';

export const testimonialSchema = z.object({
  _id: z.string(),
  user: z.object({
    name: z.string().min(3).trim(),
    role: z.string().trim().toLowerCase(),
  }),
  feedback: z.string().trim().nonempty(),
  status: z.literal(['pending', 'accepted']),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
