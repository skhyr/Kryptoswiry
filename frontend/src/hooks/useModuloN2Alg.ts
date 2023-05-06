import {
  createPairs,
  letterPairToNumber,
  numberToLetterPair,
  transformNumber2,
} from "../utils/alphabet";

export const useModuloN2Alg = (
  input: string,
  key?: { a: number; b: number }
) => {
  const layer0 = createPairs(input.split("")).map((el, i) => ({
    id: i,
    val: el,
  }));
  const layer1 = layer0.map((el) => ({
    id: el.id,
    val: letterPairToNumber(el.val),
  }));

  if (!key)
    return [
      layer0.map((el) => el.val[0] + el.val[1]),
      layer1.map((el) => el.val.toString()),
      [],
      [],
    ];
  const layer2 = layer1.map((el) => ({
    id: el.id,
    val: transformNumber2(el.val, key.a, key.b),
  }));
  const layer3 = layer2.map((el) => ({
    id: el.id,
    val: numberToLetterPair(el.val),
  }));

  return [
    layer0.map((el) => el.val[0] + el.val[1]),
    layer1.map((el) => el.val.toString()),
    layer2.map((el) => el.val.toString()),
    layer3.map((el) => el.val[0] + el.val[1]),
  ] as const;
};
