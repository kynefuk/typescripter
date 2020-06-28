import axios from 'axios';
export {};


let url = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

// interface Article {
//   id: number;
//   title: string;
//   description: string;
// }
// axios.get(url).then(response => {
//   let data: Article[] = response.data;
//   console.log(data);
// });

// let bar: never

const sum = (...values: number[]) => {
  let sum = 0;
  values.map(v => sum += v)
  return sum;
}

console.log(sum(1,3,4,5))