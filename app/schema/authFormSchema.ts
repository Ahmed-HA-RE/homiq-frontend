import z from 'zod';

export const signUpSchema = z.object({
  name: z
    .string()
    .nonempty({ error: 'Name is required' })
    .regex(/^[a-zA-Z ]+$/, { error: 'Invalid Name' })
    .trim()
    .min(3, { error: 'Must be at least 3 characters' })
    .max(20, { error: 'Must not exceed 20 characters' }),
  email: z
    .string()
    .nonempty({ error: 'Email is required' })
    .email({ error: 'Invalid email address' }),
  password: z
    .string()
    .nonempty({ error: 'Password is required' })
    .min(6, { error: 'Must be at least 8 characters' })
    .max(20, { error: 'Must not exceed 10 characters' })
    .regex(/(?=.*[A-Z])/, {
      error: 'Password must have at least one Uppercase character',
    })
    .regex(/(?=.*[a-z])/, {
      error: 'Password must have at least one Lowercase character',
    })
    .regex(/[0-9]/, { error: 'Password must have at least one digit' }),
  role: z
    .string({ error: 'Role is required' })
    .nonempty({ error: 'Role is required' })
    .trim()
    .toLowerCase(),
});

export type SignUp = z.infer<typeof signUpSchema>;

export const logInSchema = signUpSchema.pick({
  email: true,
  password: true,
});

export type LogIn = z.infer<typeof logInSchema>;

export const resetPassSchema = z
  .object({
    password: z
      .string()
      .nonempty({ error: 'Password is required' })
      .min(6, { error: 'Must be at least 8 characters' })
      .max(20, { error: 'Must not exceed 10 characters' })
      .regex(/(?=.*[A-Z])/, {
        error: 'Password must have at least one Uppercase character',
      })
      .regex(/(?=.*[a-z])/, {
        error: 'Password must have at least one Lowercase character',
      })
      .regex(/[0-9]/, { error: 'Password must have at least one digit' }),
    confirmPassword: z.string().nonempty({ error: 'Confirmation is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    error:
      'The passwords do not match. Please make sure both fields are identical.',
  });

export type ResetPassword = z.infer<typeof resetPassSchema>;

export const recoverPassSchema = signUpSchema.pick({ email: true });
export type RecoverPassword = z.infer<typeof recoverPassSchema>;

export const contactInfoSchema = z.object({
  email: signUpSchema.shape.email,
  name: signUpSchema.shape.name,
  role: signUpSchema.shape.role,
});

export type ContactInfo = z.infer<typeof contactInfoSchema>;

export const updateUserPassSchema = z
  .object({
    password: signUpSchema.shape.password,
    newPassword: z
      .string({ error: 'New password is required' })
      .nonempty({ error: 'New password is required' })
      .min(6, { error: 'Must be at least 6 characters' })
      .max(20, { error: 'Must not exceed 20 characters' })
      .regex(/(?=.*[A-Z])/, {
        error: 'Password must have at least one Uppercase character',
      })
      .regex(/(?=.*[a-z])/, {
        error: 'Password must have at least one Lowercase character',
      })
      .regex(/[0-9]/, { error: 'Password must have at least one digit' }),

    confirmPassword: z
      .string({ error: 'Confirm password is required' })
      .nonempty({ error: 'Confirm password is required' })
      .min(6, { error: 'Must be at least 6 characters' })
      .max(20, { error: 'Must not exceed 20 characters' })
      .regex(/(?=.*[A-Z])/, {
        error: 'Password must have at least one Uppercase character',
      })
      .regex(/(?=.*[a-z])/, {
        error: 'Password must have at least one Lowercase character',
      })
      .regex(/[0-9]/, { error: 'Password must have at least one digit' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    error: "Password dosen't match",
    path: ['confirmPassword'],
  });

export type UpdateUserPass = z.infer<typeof updateUserPassSchema>;
