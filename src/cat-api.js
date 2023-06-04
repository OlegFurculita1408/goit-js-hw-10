
const BASE_URL = 'https://api.thecatapi.com/v1/';
const END_POINT = 'breeds';
const END_POINT_IMG = 'images/';
const API_KEY = 'live_2nUbRAaTiUgWYWS8KXuGfgwBOF83b1r9dJuyQIO8RTidjVuc65yHuEVxepuqSxWH';

const loader = document.querySelector('.loader');

function loaderDelete() {
    loader.classList.add('loader')
}

export function fetchBreeds() {
    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}`).then(resp => {
        if(!resp.ok){
            throw new Error(resp.statusText);
            
        }

        return resp.json();
        }
    );
};

// ----------------------------------------------------------------------------------

export function fetchCatByBreed(breendId) {
    return fetch(`${BASE_URL}${END_POINT_IMG}${breendId}`).then(resp => {
        if(!resp.ok){
            throw new Error(resp.statusText)
        }

        loaderDelete()
        return resp.json();
        }
    );
};
