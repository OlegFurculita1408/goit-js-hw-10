import { fetchBreeds, fetchCatByBreed } from './cat-api.js';


const select = document.querySelector('.breed-select');
const div = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');


fetchBreeds()
    .then((data) => select.insertAdjacentHTML('beforeend', createOptionSelect(data)))
    .catch((err) => console.log(err))

function createOptionSelect(arr) {
    return arr.map(({name, reference_image_id}) => `
        <option value="${reference_image_id}">${name}</option>`).join('');
}

select.addEventListener('change', handlerSearch);

    function handlerSearch(evt) {
        evt.preventDefault();
        const { value } = evt.currentTarget;
        fetchCatByBreed(value)
            .then((data) => div.innerHTML = createMarkup(data))
            .catch((err) => console.log(err))
        if (value === 0 ){
            error.classList.remove("error")
        }
    }
        
function createMarkup(obj) {
    const { name, origin, temperament, description } = obj.breeds[0]
    return `
        <img src="${obj.url}" alt="cat" width="400px">
        <div class='container'>
        <h2 class="name">Name, ${name}.</h2>
        <h3>Country of origin:${origin}</h3>
        <h3 class="origin">Temperament: ${temperament}</h3>
        <p class="description">Description: ${description}</p>
        </div>`;
}