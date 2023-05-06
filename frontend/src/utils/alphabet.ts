export const alphabet = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "-",
];

export const LENGTH = alphabet.length;
export const LENGTH2 = alphabet.length * alphabet.length;

export const letterToNumber = (l: string) => alphabet.indexOf(l);
export const numberToLetter = (n: number) => alphabet[n];
export const transformNumber = (n: number, a: number, b: number) =>
  (n * a + b) % LENGTH;

export const transformNumber2 = (n: number, a: number, b: number) =>
  (n * a + b) % LENGTH;

export const letterPairToNumber = ([a, b]: [string, string]) =>
  letterToNumber(a) * LENGTH + letterToNumber(b);

export const numberToLetterPair = (n: number) =>
  [Math.floor(n / LENGTH), n % LENGTH].map((l) => alphabet[l]) as [
    string,
    string
  ];

export const createPairs = <T>(arr: T[]): [T, T][] => {
  return arr.reduce((acc: [T, T][], curr: T, index: number) => {
    if (index % 2 === 0) {
      acc.push([curr, arr[index + 1]]);
    }
    return acc;
  }, []);
};
