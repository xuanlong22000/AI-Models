import { create } from 'zustand';

interface LoadingState {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export const useLoading = create<LoadingState>((set) => ({
  loading: false,
  startLoading: () => set({ loading: true }),
  stopLoading: () => set({ loading: false }),
}));
