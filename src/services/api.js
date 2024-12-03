import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-api-backend-76f45363b049.herokuapp.com', // URL do seu backend no Heroku
});

export default api;
