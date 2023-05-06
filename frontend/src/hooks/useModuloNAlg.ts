import {
  letterToNumber,
  numberToLetter,
  transformNumber,
} from "../utils/alphabet";

export const useModuloNAlg = (
  input: string,
  key?: { a: number; b: number }
) => {
  const layer0 = input.split("").map((el, i) => ({ id: i, val: el }));
  const layer1 = layer0.map((el) => ({
    id: el.id,
    val: letterToNumber(el.val),
  }));

  if (!key)
    return [
      layer0.map((el) => el.val),
      layer1.map((el) => el.val.toString()),
      [],
      [],
    ];

  const layer2 = layer1.map((el) => ({
    id: el.id,
    val: transformNumber(el.val, key.a, key.b),
  }));
  const layer3 = layer2.map((el) => ({
    id: el.id,
    val: numberToLetter(el.val),
  }));

  return [
    layer0.map((el) => el.val),
    layer1.map((el) => el.val.toString()),
    layer2.map((el) => el.val.toString()),
    layer3.map((el) => el.val),
  ] as const;
};
