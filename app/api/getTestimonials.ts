import api from '~/lib/axios';
import type { Testimonial } from '~/schema/testimonialsSchema';

// fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BACKEND_URL_PRODUCTION}/testimonials`
    );
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    } else if (error.message) {
      message = error.message;
    }

    throw new Error(message);
  }
}

// Create new testimonial || review
export async function createTestimonial({
  role,
  feedback,
}: {
  role: string;
  feedback: string;
}) {
  try {
    const { data } = await api.post(
      `${import.meta.env.VITE_BACKEND_URL_PRODUCTION}/testimonials`,
      { name, role, feedback }
    );
    console.log(data);
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    } else if (error.message) {
      message = error.message;
    }

    throw new Error(message);
  }
}
