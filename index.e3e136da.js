var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},e.parcelRequired7c6=t);var o=t("9dxg1");const i=document.querySelector(".breed-select"),c=document.querySelector(".cat-info"),a=document.querySelector(".loader"),s=document.querySelector(".error");(0,o.fetchBreeds)().then((e=>i.insertAdjacentHTML("beforeend",e.map((({name:e,reference_image_id:r})=>`\n        <option value="${r}">${e}</option>`)).join("")))).catch((e=>s.classList.remove("error"))),i.addEventListener("change",(function(e){e.preventDefault();const{value:r}=e.currentTarget;a.classList.remove("loader"),(0,o.fetchCatByBreed)(r).then((e=>c.innerHTML=function(e){const{name:r,origin:n,temperament:t,description:o}=e.breeds[0];return`\n        <img src="${e.url}" alt="cat" width="400px">\n        <div class='container'>\n        <h2 class="name">Name, ${r}.</h2>\n        <h3>Country of origin:${n}</h3>\n        <h3 class="origin">Temperament: ${t}</h3>\n        <p class="description">Description: ${o}</p>\n        </div>`}(e)),s.classList.add("error")).catch((e=>s.classList.remove("error")),c.innerHTML="")}));
//# sourceMappingURL=index.e3e136da.js.map
