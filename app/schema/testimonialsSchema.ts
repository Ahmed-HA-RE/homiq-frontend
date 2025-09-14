import z from 'zod';

export const testimonialSchema = z.object({
  _id: z.string(),
  name: z.string().min(3).trim(),
  feedback: z.string().trim().nonempty(),
  role: z.string().trim().toLowerCase(),
  status: z.literal(['pending', 'accepted']),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
