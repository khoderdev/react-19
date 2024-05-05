import { atomWithStorage } from "jotai/utils";

export const todoAtom = atomWithStorage("todos", []);
