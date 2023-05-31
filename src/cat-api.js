
const BASE_URL = 'https://api.thecatapi.com/v1/';
const END_POINT = 'breeds';
const END_POINT_IMG =  'images/search';
const API_KEY = 'live_2nUbRAaTiUgWYWS8KXuGfgwBOF83b1r9dJuyQIO8RTidjVuc65yHuEVxepuqSxWH';

const select = document.querySelector('.breed-select');
const div = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');


function fetchBreeds() {
    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}`).then(resp => {
        if(!resp.ok){
            throw new Error(resp.statusText);
        }

        return resp.json();
        }
    );
};
fetchBreeds()
    .then((data) => select.insertAdjacentHTML('beforeend', createOptionSelect(data)))
    .catch((err) => console.log(err))

function createOptionSelect(arr) {
    return arr.map(({name, id}) => `<option value="${id}">${name}</option>`).join('');
}
// ----------------------------------------------------------------------------------

select.addEventListener('change', handlerSearch);

    function handlerSearch(evt) {
        evt.preventDefault();
        const { value } = evt.currentTarget;
        fetchCatByBreed(value)
            .then((data) => div.insertAdjacentHTML('beforeend', createMarkup(data)))
            .catch((err) => console.log(err))
    }

function fetchCatByBreed(breendId) {
    return fetch(`${BASE_URL}${END_POINT_IMG}?api_key=${API_KEY}?breed_ids=${breendId}`).then(resp => {
        if(!resp.ok){
            throw new Error(resp.statusText)
        }

        return resp.json();
        }
    );
};
    
function createMarkup(array) {
    return array.map(({ name, temperament, origin, description, url}) => `
        <img src="${url}" alt="cat" width="400px">
        <h2 class="name">${name}</h2>
        <h3>${origin}</h3>
        <h3 class="origin">${temperament}</h3>
        <p class="description">${description}</p>`).join('');
}
