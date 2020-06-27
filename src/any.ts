import axios from 'axios';
export {};


let url = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

interface Article {
  id: number;
  title: string;
  description: string;
}
axios.get(url).then(response => {
  let data: Article[] = response.data;
  console.log(data);
});