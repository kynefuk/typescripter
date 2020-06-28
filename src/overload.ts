export {};

// シグネチャ
type IOverload = {
  (value: number): number;
  (value: string): string;
}

type NumberOverload = (value:number) => number;
type StringOverload = (value: string) => string;

// シグネチャにより、numberまたはstringしか受け付けない
// 引数にnumberかstringのどちらが来るかわからないのでanyにする
const double: NumberOverload & StringOverload = (value: any): any => {
  if(typeof value === "number") {
    return value * 2;
  } else  {
    return value + value;
  }
};

console.log(double("hoge"))