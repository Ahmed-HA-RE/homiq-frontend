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

type CreateTestimonialResponse = {
  message: string;
  testimonial: {
    _id: string;
    name: string;
    role: string;
    feedback: string;
    status: string;
  };
};

// Create new testimonial || review
export async function createTestimonial({
  name,
  role,
  feedback,
}: {
  name: string;
  role: string;
  feedback: string;
}): Promise<CreateTestimonialResponse> {
  try {
    const { data } = await api.post(
      `${import.meta.env.VITE_BACKEND_URL}/testimonials`,
      { name, role, feedback }
    );
    console.log(data);
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong';

    if (error.response?.data.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }

    throw new Error(error);
  }
}
