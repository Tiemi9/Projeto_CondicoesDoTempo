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
const data = document.querySelector('#weather-data');
const info = document.querySelector('.weather-info');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !data)
        return;
    const location = input.value;
    if (location.length < 3) {
        alert('O local precisa ter, pelo menos, 3 caractéres. 😉');
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc75b3c4d0b39b75894a9c59513e59f4&lang=pt_br&units=metric`);
        const localData = yield response.json();
        const infos = {
            temperature: Math.round(localData.main.temp),
            local: localData.name,
            icone: `https://openweathermap.org/img/wn/${localData.weather[0].icon}@2x.png`,
        };
        data.innerHTML = `
            <div class="weather-info">
                <p>${infos.local}</p>
                <span>${infos.temperature}°C</span>
            </div>
    
            <img src="${infos.icone}" />
        `;
    }
    catch (error) {
        console.log('Erro na obteção de dados');
    }
}));
input === null || input === void 0 ? void 0 : input.addEventListener('focus', (event) => {
    input.setAttribute('placeholder', '');
});
input === null || input === void 0 ? void 0 : input.addEventListener('blur', (event) => {
    input.setAttribute('placeholder', 'Insira sua localização...');
});
