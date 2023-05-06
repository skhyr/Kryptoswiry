import { alphabet, LENGTH, LENGTH2, letterPairToNumber } from "./alphabet";

export const crack = (
  w: [string, string][]
): { a: number; b: number; id: number }[] => {
  let result = [];
  for (let a = 0; a < LENGTH; a++) {
    for (let b = 0; b < LENGTH; b++) {
      let res = w.every(([p, l]) => {
        let pn = alphabet.indexOf(p);
        let ln = alphabet.indexOf(l);
        return (a * pn + b) % LENGTH === ln;
      });
      if (res) result.push({ a, b, id: Math.floor(Math.random() * 10000) });
    }
  }
  return result;
};

export const crack2 = (
  w: [[string, string], [string, string]][]
): { a: number; b: number; id: number }[] => {
  let result = [];
  for (let a = 0; a < LENGTH2; a++) {
    for (let b = 0; b < LENGTH2; b++) {
      let res = w.every(([p, l]) => {
        const pn = letterPairToNumber(p);
        const ln = letterPairToNumber(l);
        return (a * pn + b) % LENGTH2 === ln;
      });
      if (res) result.push({ a, b, id: Math.floor(Math.random() * 10000) });
    }
  }
  return result;
};
