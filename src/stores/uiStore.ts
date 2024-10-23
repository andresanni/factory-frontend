import { create } from "zustand";

interface UiState {
    selectedHeaderOption: string | null;
    setSelectedHeaderOption: (option:string)=> void;
}

const useUiStore = create<UiState>((set)=>({
    selectedHeaderOption: null,
    setSelectedHeaderOption: (option: string) => set({selectedHeaderOption: option})
}))


export default useUiStore;