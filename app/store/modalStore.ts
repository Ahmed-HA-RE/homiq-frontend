import { create } from 'zustand';

type ModalState = {
  openedModal: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  openedModal: false,
  openModal: () => {
    set(() => ({ openedModal: true }));
  },
  closeModal: () => {
    set(() => ({ openedModal: false }));
  },
}));
