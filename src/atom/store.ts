import { createStore, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Define atoms for different states
export const ordersAtom = atomWithStorage("Orders", []);
export const notifications = atomWithStorage("Notifications", false);
export const isSubmitting = atom(false);
export const successMessageTimeoutAtom = atom<NodeJS.Timeout | null>(null);
export const todoListAtom = atom<string[]>([]);
export const todoAtom = atomWithStorage("todos", []);
export const persistedIsLoggedInAtom = atomWithStorage("isLoggedIn", false);
export const isLoggedInAtom = atom(false);
export const tokenAtom = atom("");
export const userNameAtom = atomWithStorage("userName", "");
// export const userRolesAtom = atom('');
export const userRolesAtom = atomWithStorage("userRoles", ["Admin", "User"]);
export const Users = [
  { username: "khoder", password: "admin123", role: "Admin" },
  { username: "ucef", password: "user123", role: "User" },
];

const jotaiStore = createStore(
  ordersAtom,
  userNameAtom,
  isLoggedInAtom,
  isSubmitting,
  successMessageTimeoutAtom,
  notifications,
  todoListAtom,
  todoAtom,
  tokenAtom,
  userRolesAtom,
  persistedIsLoggedInAtom
);

export default jotaiStore;
