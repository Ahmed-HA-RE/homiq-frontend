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
      `${import.meta.env.VITE_BACKEND_URL_STATIC}/contact`,
      {
        email,
        fullName,
        message,
      }
    );
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
