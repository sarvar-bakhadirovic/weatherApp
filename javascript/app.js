const KEY = '37f2b13d681e449c9358abf48b527158'
const form = document.querySelector('.weather__form')
const weatherApp = document.querySelector('.weather__app')

const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather?'
    const query = `q=${city}&units=metric&appid=${KEY}`

    const req = await fetch(base + query)
    const data = await req.json()
    return data
}


form.addEventListener('submit', e => {
    e.preventDefault()
    let {
        input
    } = e.target.elements
    let city = document.querySelector('.weather__city')
    let icon = document.querySelector('.weather__icon')
    let week = document.querySelector('.weather__weekday')
    let month = document.querySelector('.weather__monthday')
    let degree = document.querySelector('.weather__degree')
    let desc = document.querySelector('.weather__desc')
    let windSpeed = document.querySelector('.weather__windspeed')
    let humidity = document.querySelector('.weather__humidity')
    let date = new Date()
    let day;
    let monthDay;

    switch (date.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            
    }

    switch (date.getMonth()) {
        case 0:
            monthDay = "January";
            break;
        case 1:
            monthDay = "February";
            break;
        case 2:
            monthDay = "March";
            break;
        case 3:
            monthDay = "April";
            break;
        case 4:
            monthDay = "May";
            break;
        case 5:
            monthDay = "June";
            break;
        case 6:
            monthDay = "July";
            break;
        case 7:
            monthDay = "August";
            break;
        case 8:
            monthDay = "September";
            break;
        case 9:
            monthDay = "October";
            break;
        case 10:
            monthDay = "November";
            break;
        case 11:
            monthDay = "December";
            
    }

    getData(input.value)
    .then(res => {
        city.textContent = `${res.name}, ${res.sys.country}`
        icon.innerHTML = `<img src="./images/${res.weather[0].icon}.png" alt="${res.weather[0].description}">`
        week.textContent = `${day},`
        month.textContent = `${date.getDate()} ${monthDay}`
        degree.textContent = `${Math.round(res.main.temp)}°`
        desc.textContent = `${res.weather[0].description}`
        windSpeed.textContent = `${Math.round(res.wind.speed)}km/h`
        humidity.textContent = `${Math.round(res.main.humidity)}%`
    })

    if(weatherApp.classList.contains('none')){
        weatherApp.classList.remove('none')
    }

    e.target.reset()
})