import { create } from "zustand";
import * as T from "@/types";

export const useTestState = create<T.TestState>((set) => ({
  name: "test",
  setName: (name) => set({ name }),
}));
