export {};

const a = "hoge";

let name = "hoge" as const;

console.log(typeof name === typeof a)

const obj = {
  name: "hoge",
  age: 10
} as const;

const ob: {
  [key: string]: number;
} = {
  a: 100
};

