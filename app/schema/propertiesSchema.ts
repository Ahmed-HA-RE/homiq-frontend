import z from 'zod';

// Schema for creating and updating property
export const propertyFormSchema = z.object({
  name: z
    .string()
    .nonempty({ error: 'Property name is required' })
    .regex(/^[a-zA-Z\s]+$/, { error: 'Field must only be letters' })
    .trim()
    .min(4, { error: 'Property Name is too short (min 4 characters)' })
    .max(50),
  price: z
    .number({ error: 'Price is required' })
    .positive({ error: 'Price must be positive' }),
  location: z.string().trim().nonempty({ error: 'Location is required' }),
  type: z.string().trim().nonempty({ error: 'Type is required' }),
  description: z
    .string()
    .nonempty({ error: 'Description is required' })
    .trim()
    .min(4, { error: 'Characters should be at least 4' }),
  area: z.number({ error: 'Area is required' }),
  beds: z
    .number({ error: 'Beds is required' })
    .min(1, { error: 'Beds must be at least 1' })
    .max(10, { error: 'Beds cannot exceed 10' }),
  floors: z
    .number({ error: 'Floors is required' })
    .min(1, { error: 'Floors must be at least 1' })
    .max(5, { error: 'Floors cannot exceed 5' }),
  Bathrooms: z
    .number({ error: 'Bathrooms is required' })
    .min(1, { error: 'Bathrooms must be at least 1' })
    .max(10, { error: 'Bathrooms cannot exceed 10' }),
  parking: z
    .number({ error: 'Garage is required' })
    .min(1, { error: 'Garage must be at least 1' })
    .max(6, { error: 'Garage cannot exceed  6' }),
  amenities: z.array(z.string()),
});
export type PropertyForm = z.infer<typeof propertyFormSchema>;

// Schema for uploding property images
export const uploadImagesSchema = z.object({
  interior: z
    .array(z.string().trim().toLowerCase(), {
      error: 'Must include at least 1 interior image',
    })
    .min(1, { error: 'Must include at least 1 interior image' }),
  exterior: z
    .array(z.string().trim().toLowerCase(), {
      error: 'Must include at least 1 exterior image',
    })
    .min(1, { error: 'Must include at least 1 exterior image' })
    .max(1, { error: 'Max limit is only 1' }),
});

export type UploadImages = z.infer<typeof uploadImagesSchema>;
