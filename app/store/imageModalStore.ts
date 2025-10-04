import type { FileWithPath } from '@mantine/dropzone';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ImageModalState = {
  propertyId: string;
  setPropertyId: (propertyId: string) => void;
  opened: boolean;
  close: () => void;
  open: () => void;
  interiorFiles: FileWithPath[];
  setInteriorFile: (files: FileWithPath[]) => void;
  exteriorFiles: FileWithPath[];
  setExteriorFile: (files: FileWithPath[]) => void;
};

const useImageModalStore = create<ImageModalState>()(
  devtools((set) => ({
    opened: false,
    interiorFiles: [],
    exteriorFiles: [],
    setInteriorFile: (files) => set({ interiorFiles: files }),
    setExteriorFile: (files) => set({ exteriorFiles: files }),
    open: () => set({ opened: true }),
    close: () => set({ opened: false }),
    setPropertyId: (propertyId) => set({ propertyId }),
  }))
);
export default useImageModalStore;
