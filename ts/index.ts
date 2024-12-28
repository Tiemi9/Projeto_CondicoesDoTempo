const form = document.querySelector('#form')
//definoir a tipagem para que não haja erros posteriormente
const input: HTMLInputElement | null = document.querySelector('#location-form')
const button = document.querySelector('#location-button')
const data = document.querySelector('#weather-data')
const info = document.querySelector('.weather-info')

form?.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    if (!input || !data) return

    const location = input.value

    if (location.length < 3) {
        alert('O local precisa ter, pelo menos, 3 caractéres. 😉')
        return
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc75b3c4d0b39b75894a9c59513e59f4&lang=pt_br&units=metric`)

        const localData = await response.json()
    
        const infos = {
            temperature: Math.round(localData.main.temp),
            local: localData.name,
            icone: `https://openweathermap.org/img/wn/${localData.weather[0].icon}@2x.png`,
        }
       
        data.innerHTML = `
            <div class="weather-info">
                <p>${infos.local}</p>
                <span>${infos.temperature}°C</span>
            </div>
    
            <img src="${infos.icone}" />
        `
    } catch(error) {
        console.log('Erro na obteção de dados')
    }
    
})

input?.addEventListener('focus' , (event) => {
    input.setAttribute('placeholder', '')
})
input?.addEventListener('blur' , (event) => {
    input.setAttribute('placeholder', 'Insira sua localização...')
})