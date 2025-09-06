import api from '~/lib/axios';
import type { Testimonials } from '~/types';

// fetch all testimonials
export async function getTestimonials(): Promise<Testimonials[]> {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BACKEND_URL}/testimonials`
    );
    return data;
  } catch (error: any) {
    throw new Error('Something went Wrong');
  }
}
