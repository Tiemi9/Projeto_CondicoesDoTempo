"use strict";
const form = document.querySelector('#form');
const input = document.querySelector('#location-form');
const button = document.querySelector('#location-button');
const data = document.querySelector('#wheather-data');
const info = document.querySelector('.wheather-info');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
    event.preventDefault();
});
