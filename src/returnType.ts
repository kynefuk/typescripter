export {};

const year = (): number => {
  return 2019;
};
 
// sayYearは() => numberという型の関数を返す関数です。
const sayYear = (): (() => number) => {
  return year;
};
 
// typeofの結果
console.log(sayYear()); // => [Function: year]
console.log(typeof sayYear()); // => function
console.log(typeof sayYear()()); // => number
console.log(typeof sayYear); // => function
 
type TYear = ReturnType<typeof year>; // => type TYear = number
type TSayYear = ReturnType<typeof sayYear>;
type TSayYearType = typeof sayYear;


// f1が返す値の型がT4に設定される
// type T4 = ReturnType<typeof f1>;