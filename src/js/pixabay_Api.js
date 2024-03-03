import axios from 'axios';

const USER_API_KEY = '30720436-88ffd0ded62e0d7b7cde7caf4';
const URL = 'https://pixabay.com/api/';

export async function fetchApi(q) {
  // const url = `${URL}?key=${USER_API_KEY}&q=${q}&image_type=photo&orientation =horizontal&safesearch =true&per_page=40`;
  // const resp = await axios.get(url);
  // console.log(resp.data);
  await axios({
    method: 'get',
    url: `${URL}`,
    params: {
      key: `${USER_API_KEY}`,
      q: `${q}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: '40',
    },
  }).then(resp => console.log(resp.data));
}
