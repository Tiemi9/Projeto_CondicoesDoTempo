"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector('#form');
//definoir a tipagem para que não haja erros posteriormente
const input = document.querySelector('#location-form');
const button = document.querySelector('#location-button');
const data = document.querySelector('#wheather-data');
const info = document.querySelector('.wheather-info');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input)
        return;
    const location = input.value;
    if (location.length < 3) {
        alert('O local precisa ter, pelo menos, 3 caractéres. 😉');
        return;
    }
    const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc75b3c4d0b39b75894a9c59513e59f4&lang=pt_br&units=metric`);
    const localData = yield response.json();
    console.log(localData);
}));
