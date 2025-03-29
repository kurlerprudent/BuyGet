// components/FormStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type FormData = {
  name: string;
  contact: string;
  email: string;
  education: string;
  experience: string;
  currentProject: 'Yes' | 'No' | '';
  registrationType: 'Developer' | 'Project' | '';
};

type FormStore = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
};

const initialData: FormData = {
  name: '',
  contact: '',
  email: '',
  education: '',
  experience: '',
  currentProject: '',
  registrationType: '',
};

export const useFormStore = create<FormStore>()(
  devtools((set) => ({
    formData: initialData,
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
    resetForm: () => set({ formData: initialData }),
  }))
);