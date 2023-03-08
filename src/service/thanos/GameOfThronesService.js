import axios from 'axios';

export default class GameOfThrones{
     getGameOfThronesCharacters(){
        return axios.get('https://thronesapi.com/api/v2/Characters').then((res) => res.data);
     }
}