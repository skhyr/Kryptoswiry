import { alphabet } from "./alphabet";

export const filterText = (v: string) =>
  v
    .toUpperCase()
    .split("")
    .filter((l) => alphabet.includes(l))
    .join("");
