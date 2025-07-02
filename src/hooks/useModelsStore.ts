import { create } from 'zustand';
import axios from 'axios';
import { useLoading } from './useLoading';

export interface Model {
  id: string;
  name: string;
  description: string;
  version: string;
  status: string;
  createdAt: string;
  tags: string[];
  content: string;
}

interface ModelsState {
  models: Model[];
  loading: boolean;
  error: string | null;
  fetchModels: () => Promise<void>;
}

export const useModelsStore = create<ModelsState>((set) => ({
  models: [],
  loading: false,
  error: null,
  fetchModels: async () => {
    const { startLoading, stopLoading } = useLoading.getState();
    set({ loading: true, error: null });
    startLoading();
    try {
      const res = await axios.get<Model[]>('/models');
      set({ models: res.data, loading: false });
    } catch (err: unknown) {
      let message = 'Data not found';
      if (axios.isAxiosError(err) && err.message) message = err.message;
      if (err instanceof Error) message = err.message;
      set({ error: message, loading: false, models: [] });
    } finally {
      stopLoading();
    }
  },
}));
