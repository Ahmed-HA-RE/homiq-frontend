import api from '~/lib/axios';
import { propertySchema, type Property } from '~/schema/propertiesSchema';
import z from 'zod';

const propertiesSchema = z.array(propertySchema);

type PropertiesPromise = {
  total_page: number;
  data: Property[];
};

// fetch all properties
export async function getProperties(
  params?: Record<string, string | number>
): Promise<PropertiesPromise> {
  try {
    const { data } = await api.get(
      `${import.meta.env.VITE_BACKEND_URL_PRODUCTION}/properties`,
      { params }
    );

    const parsed = propertiesSchema.parse(data.data);
    return { data: parsed, total_page: data.pagination.total_page };
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

// paginated properties
export async function getPaginatedProperties(page: number, location: string) {
  const data = await getProperties({ page: page, limit: 4, location });
  return data;
}

// fetch latest properties
export async function getLatestProperties() {
  const { data } = await getProperties({ sort: '-createdAt', limit: 3 });
  return data;
}

//Create new property
export async function createProperty(formData: FormData): Promise<Property> {
  try {
    const { data } = await api.post('/properties', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
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

//Update property
export async function updateProperty(
  formData: FormData,
  _id: string
): Promise<Property> {
  try {
    const { data } = await api.put(`/properties/${_id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
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
  try {
    const { data } = await api.delete(`/properties/${_id}`);
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
