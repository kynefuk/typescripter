export {};

// シグネチャ
type IOverload = {
  (value: number): number;
  (value: string): string;
}

// シグネチャにより、numberまたはstringしか受け付けない
// 引数にnumberかstringのどちらが来るかわからないのでanyにする
const double: IOverload = (value: any): any => {
  if(typeof value === "number") {
    return value * 2;
  } else  {
    return value + value;
  }
};

console.log(double("hoge"))