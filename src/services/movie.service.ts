import  axios from 'axios';


export class MovieService {
  url = 'https://imdb146.p.rapidapi.com/v1';
  headers = {
    'X-RapidAPI-Key': '6b5d38b83emsh3ca861979da5d9ep10a760jsn3bf9117cdebf',
    'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
  }

  
  // search functions here

  searchData(title: string):Promise<any> {
    return axios({url: `${this.url}/find?query=${encodeURI(title)}`, method: 'get', headers: this.headers}).then(results => {
      console.log(results);
      return results.data.titleResults;
    });
  }

  getDetails(id: string):Promise<any> {
    return axios({url:`${this.url}/title?id=${id}`, method:'get', headers: this.headers}).then(results => {
      console.log(results);
      return results.data;
    });;
  }
}
