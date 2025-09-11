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
      `${import.meta.env.VITE_BACKEND_URL_STATIC}/emails/contact`,
      {
        email,
        fullName,
        message,
      }
    );
    return data;
  } catch (error: any) {
    console.log(error);
    let message = 'Something went wrong';

    if (error.response?.data.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }

    const err = new Error(message);
    throw err;
  }
}
