import api from '~/lib/axios';
import type { SignUp, LogIn, ResetPassword } from '~/schema/authFormSchema';

export async function signUpUser(credentials: SignUp) {
  try {
    const { data } = await api.post('/auth/register', credentials, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong! Please try again later.';

    if (error.response?.data?.message === 'Invalid Credentials') {
      message =
        'We couldn’t find an account with that email and password combination.';
    } else if (error.response?.data?.message) {
      message = error.response?.data?.message;
    }

    throw new Error(message);
  }
}

export async function loginUser(credentials: LogIn) {
  try {
    const { data } = await api.post('/auth/login', credentials, {
      withCredentials: true,
    });
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong! Please try again later.';

    if (error.response?.data?.message === 'Invalid Credentials') {
      message =
        'We couldn’t find an account with that email and password combination.';
    } else if (error.response?.data?.message) {
      message = error.response?.data?.message;
    }

    throw new Error(message);
  }
}

export async function logoutUser() {
  try {
    await api.post('/auth/logout', {}, { withCredentials: true });
  } catch (error: any) {
    let message = 'Something Went Wrong! Please try again later.';

    if (error.response?.data?.message === 'Invalid Credentials') {
      message = 'Failed to logout';
    } else if (error.response?.data?.message) {
      message = error.response?.data?.message;
    }

    throw new Error(message);
  }
}

export async function refreshAccessToken() {
  try {
    const { data } = await api.post(
      '/auth/refresh',
      {},
      { withCredentials: true }
    );
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong! Please try again later.';

    if (error.response?.data?.message === 'Invalid Credentials') {
      message = 'Failed to refresh access token';
    } else if (error.response?.data?.message) {
      message = error.response?.data?.message;
    }

    throw new Error(message);
  }
}

export async function recoverPassword(email: string) {
  try {
    const data = await api.post('/auth/recover-password', { email });
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong! Please try again later.';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    }

    throw new Error(message);
  }
}

type User = {
  accessToken: string;
  id: string;
  email: string;
  name: string;
  role: string;
  userType: 'admin' | 'user';
};

export async function resetPassword({
  credentials,
  resetToken,
}: {
  credentials: ResetPassword;
  resetToken: string;
}): Promise<User> {
  try {
    const { data } = await api.put(
      `/auth/reset-password/${resetToken}`,
      credentials
    );
    return data;
  } catch (error: any) {
    let message = 'Something Went Wrong! Please try again later.';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    }

    throw new Error(message);
  }
}
