import { createStore, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Define atoms for different states
export const userNameAtom = atomWithStorage("userName", "John Doe");
export const ordersAtom = atomWithStorage("Orders", []);
export const notifications = atomWithStorage("Notifications", false);
export const isLoggedInAtom = atom(false);
export const isSubmitting = atom(false);
export const successMessageTimeoutAtom = atom<NodeJS.Timeout | null>(null);
export const todoListAtom = atom<string[]>([]);
export const token = "token";
export const persistedIsLoggedInAtom = atomWithStorage("isLoggedIn", false);

const jotaiStore = createStore(
  ordersAtom,
  userNameAtom,
  isLoggedInAtom,
  isSubmitting,
  successMessageTimeoutAtom,
  notifications,
  todoListAtom,
  token,
  persistedIsLoggedInAtom
);

export default jotaiStore;
