import { create } from 'zustand';
import { BiodataForm, defaultBiodata } from './types';

interface BiodataStore {
  biodata: BiodataForm;
  currentStep: number;
  totalSteps: number;
  setBiodata: (data: Partial<BiodataForm>) => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetBiodata: () => void;
  isPaid: boolean;
  setIsPaid: (paid: boolean) => void;
}

export const useBiodataStore = create<BiodataStore>((set) => ({
  biodata: defaultBiodata,
  currentStep: 0,
  totalSteps: 9,
  isPaid: false,
  setBiodata: (data) =>
    set((state) => ({
      biodata: { ...state.biodata, ...data },
    })),
  setStep: (step) => set({ currentStep: step }),
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1),
    })),
  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 0),
    })),
  resetBiodata: () => set({ biodata: defaultBiodata, currentStep: 0, isPaid: false }),
  setIsPaid: (paid) => set({ isPaid: paid }),
}));
