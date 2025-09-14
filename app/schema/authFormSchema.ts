import z from 'zod';

export const signUpSchema = z.object({
  firstName: z
    .string()
    .nonempty({ error: 'Field is required' })
    .regex(/^[a-zA-Z ]+$/, { error: 'Invalid Name' })
    .trim()
    .min(3, { error: 'Must be at least 3 characters' })
    .max(10, { error: 'Must not exceed 10 characters' }),
  lastName: z
    .string()
    .nonempty({ error: 'Field is required' })
    .regex(/^[a-zA-Z ]+$/, { error: 'Invalid Name' })
    .trim()
    .min(3, { error: 'Must be at least 3 characters' })
    .max(10, { error: 'Must not exceed 10 characters' }),
  email: z
    .string()
    .nonempty({ error: 'Field is required' })
    .email({ error: 'Invalid email address' }),
  password: z
    .string()
    .nonempty({ error: 'Field is required' })
    .min(6, { error: 'Must be at least 8 characters' })
    .max(20, { error: 'Must not exceed 10 characters' })
    .regex(/(?=.*[A-Z])/, {
      error: 'Password must have at least one Uppercase character',
    })
    .regex(/(?=.*[a-z])/, {
      error: 'Password must have at least one Lowercase character',
    })
    .regex(/[0-9]/, { error: 'Password must have at least one digit' }),
});

export type SignUp = z.infer<typeof signUpSchema>;

export const logInSchema = signUpSchema.pick({ email: true, password: true });

export type LogIn = z.infer<typeof logInSchema>;
