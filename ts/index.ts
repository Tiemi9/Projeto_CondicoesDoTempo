const form = document.querySelector('#form')
//definoir a tipagem para que não haja erros posteriormente
const input: HTMLInputElement | null = document.querySelector('#location-form')
const button = document.querySelector('#location-button')
const data = document.querySelector('#wheather-data')
const info = document.querySelector('.wheather-info')

form?.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    if (!input) return

    const location = input.value

    if (location.length < 3) {
        alert('O local precisa ter, pelo menos, 3 caractéres. 😉')
        return
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc75b3c4d0b39b75894a9c59513e59f4&lang=pt_br&units=metric`)

    const localData = await response.json()

    console.log(localData)
})