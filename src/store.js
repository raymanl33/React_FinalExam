import create from "zustand";
import produce from "immer";


export const useStore = create((set) => ({
    search: "",
    searchUpdate: (text) =>
      set(
        produce((state) => {
          state.search = text
        })
      ), 
  }));