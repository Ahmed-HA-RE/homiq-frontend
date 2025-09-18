import api from '~/lib/axios';
import {
  propertySchema,
  type Property,
  type PaginatedProperties,
  pagenatedProperties,
} from '~/schema/propertiesSchema';
import z from 'zod';

const propertiesSchema = z.array(propertySchema);

// fetch all properties
export async function getProperties(): Promise<Property[]> {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BACKEND_URL}/properties`
    );

    const parsed = propertiesSchema.parse(data);
    console.log(parsed);
    return parsed;
  } catch (error: any) {
    let message = 'Something went wrong';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    } else if (error.message) {
      message = error.message;
    }

    throw new Error(message);
  }
}

export async function getPaginatedProperties(
  limit: number,
  page: number
): Promise<PaginatedProperties> {
  try {
    const { data } = await api.get(
      `/properties/paginate?limit=${limit.toString()}&page=${page.toString()}`
    );
    const parsed = pagenatedProperties.parse(data);
    return parsed;
  } catch (error: any) {
    let message = 'Something went wrong';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    } else if (error.message) {
      message = error.message;
    }

    throw new Error(message);
  }
}

// fetch latest properties
export async function getLatestProperties(): Promise<Property[]> {
  try {
    const { data } = await api.get('/properties/latest');
    return data;
  } catch (error: any) {
    let message = 'Something went wrong';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    } else if (error.message) {
      message = error.message;
    }

    throw new Error(message);
  }
}

//Create new property
export async function createProperty(formData: FormData): Promise<Property> {
  try {
    const { data } = await api.post('/properties', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(data);
    return data;
  } catch (error: any) {
    let message = 'Something went wrong';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    } else if (error.message) {
      message = error.message;
    }
    throw new Error(message);
  }
}

//Delete property
export async function deleteProperty(_id: string) {
  await api.delete(`/properties/${_id}`);
}
