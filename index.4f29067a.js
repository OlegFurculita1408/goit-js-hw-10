function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o),o.register("9dxg1",(function(r,t){e(r.exports,"fetchBreeds",(function(){return f})),e(r.exports,"fetchCatByBreed",(function(){return s}));const n="https://api.thecatapi.com/v1/",o="breeds",i="images/",u="live_2nUbRAaTiUgWYWS8KXuGfgwBOF83b1r9dJuyQIO8RTidjVuc65yHuEVxepuqSxWH",d=document.querySelector(".loader");function f(){return fetch(`${n}${o}?api_key=${u}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function s(e){return fetch(`${n}${i}${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return d.classList.add("loader"),e.json()}))}})),o("9dxg1");
//# sourceMappingURL=index.4f29067a.js.map