import api from '~/lib/axios';

type ContactUsData = {
  email: string;
  fullName: string;
  message: string;
};

export async function sendContactForm({
  email,
  fullName,
  message,
}: ContactUsData) {
  try {
    const { data } = await api.post(
      `${import.meta.env.VITE_BACKEND_URL}/contact-us`,
      {
        email,
        fullName,
        message,
      }
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
