import api from '~/lib/axios';
import { type PropertyForm } from '~/schema/propertiesSchema';
import type { Property } from '~/type';

type PropertiesPromise = {
  total_page: number;
  results: Property[];
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

    return { results: data.results, total_page: data.pagination.total_page };
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
  const data = await getProperties({
    sort: '-createdAt',
    limit: 3,
    select: 'name images.exterior location',
  });
  return data.results;
}

//Create new property
export async function createProperty(
  newProperty: PropertyForm
): Promise<Property> {
  try {
    const { data } = await api.post('/properties', newProperty);
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
  updatedValues: PropertyForm,
  id: string
): Promise<PropertyForm> {
  try {
    const { data } = await api.put(`/properties/${id}`, updatedValues);
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

type uploadPropertyImagesProps = {
  id: string;
  uploadImagesData: FormData;
};

// Upload Property Images
export const uploadPropertyImages = async ({
  id,
  uploadImagesData,
}: uploadPropertyImagesProps): Promise<Property[]> => {
  try {
    const { data } = await api.put(
      `/properties/${id}/upload-images`,
      uploadImagesData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return data;
  } catch (error: any) {
    let message = 'Something went wrong. Please try again later';

    if (error.response?.data?.message) {
      message = error.response?.data?.message;
    }

    throw new Error(message);
  }
};
