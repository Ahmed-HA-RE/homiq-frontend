import api from '~/lib/axios';

type SendContactFormProps = {
  message: string;
};

export async function sendContactForm({ message }: SendContactFormProps) {
  try {
    const { data } = await api.post(
      `${import.meta.env.VITE_BACKEND_URL_PRODUCTION}/email/contact`,
      {
        message,
      }
    );
    return data;
  } catch (error: any) {
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
