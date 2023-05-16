console.log('I\'m in')

var API_KEY = '&appid=995a84ed458b98a3593eb1da174d8edf'
var FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
var STORE_NAME = 'cities'
var REQUEST_URL
var ICON_URL = 'https://openweathermap.org/img/w/'
var TODAY = dayjs().format('DD/MM/YYYY')
var btn = document.getElementById('history-btn')
var cHistoryContainer = document.getElementById('search-history')
var userInput = document.getElementById('user-input')
var cityInfo = document.getElementById('city-info').children
var weatherInfo = document.getElementById('weather-info').children
var next5 = document.getElementById('display-next5')

var cities = []
var forecast = []
var dayInfo = []//{
//     date: '',
//     temp: 0,
//     wind: 0,
//     humidity: 0,
//     img: '',
//     imgDesc: ''
// }

load()

btn.addEventListener('click', function () {
    btn.setAttribute("style", 'display: none;')
    HistoryContainer.setAttribute('style', 'display:block')
})

userInput.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        save(userInput.value)
        REQUEST_URL = FORECAST_URL + userInput.value.trim() + API_KEY
        getData(REQUEST_URL)
        var weatherInfo = JSON.parse((localStorage.getItem('weatherInfo')))
        display(userInput.value, weatherInfo)
    }
})

// fetch the forcase data from open weather api
function getData(endPoint) {
    fetch(endPoint)
        .then(function (response) {
            if (response.status != 200) {
                console.error('No data recived from Open Weather API.')
                return
            } else {
                return response.json()
            }
        })
        .then(function (bulk) {
            var data = bulk.list
            var day = 99
            var tmp
            for (var i = 0; i < data.length; i++) {
                tmp = (data[i].dt_txt).slice(8, 11)
                if (day != tmp) {
                    forecast.push(data[i])
                    day = tmp
                }
            }
            localStorage.setItem('forecast', JSON.stringify(forecast))
            setIcon()
        })
}
//save data to localStorage
function save(data) {
    var store
    if (!data) {
        return data
    }
    load()
    if (!cities.includes(data.toUpperCase())) {
        cities.unshift((userInput.value).toUpperCase())
        store = JSON.stringify(cities)
        localStorage.setItem(STORE_NAME, store)
    } else {
        return data
    }

}
// retrieve data from localStorage
function load() {
    var store = localStorage.getItem(STORE_NAME)
    if (!store) {
        var store = JSON.stringify(cities)
        console.log('store NOT founded!', 'store initiated as empty Array just now!.')
        localStorage.setItem(STORE_NAME, store)
    } else {
        cities = JSON.parse(store)
    }
}
// collecting the required data for elements
// set the Icon for the forecast in to weatherInfo localstorage
function setIcon() {
    var weatherInfo = []
    data = JSON.parse(localStorage.getItem('forecast'))
    localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo))
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        dayInfo[0] = (data[i].dt_txt).slice(0, 11)
        dayInfo[1] = data[i].main.temp
        dayInfo[2] = data[i].wind.speed
        dayInfo[3] = data[i].main.humidity
        dayInfo[4] = data[i].weather[0].description
        dayInfo[5] = ICON_URL + data[i].weather[0].icon + '.png'
        weatherInfo = JSON.parse(localStorage.getItem('weatherInfo'))
        if (weatherInfo)
            weatherInfo.push(dayInfo)
        localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo))
    }
}

function display(city, info) {
    cityInfo[0].textContent = city.toUpperCase() + ' '
    cityInfo[1].textContent = TODAY
    if (info) {
        cityInfo[2].setAttribute("src", info[0][5])
        console.log(weatherInfo)
        weatherInfo[1].textContent = info[0][1] + ' ºF'
        weatherInfo[4].textContent = info[0][2] + ' MPH'
        weatherInfo[7].textContent = info[0][3] + ' %'
        for (var i = 1; i < info.length; i++) {
            var h4Eldate = document.createElement("h4");
            var h4ElTemp = document.createElement("h4");
            var h4ElTWind = document.createElement("h4");
            var h4ElHumidite = document.createElement("h4");
            var imgEl = document.createElement("img");
            var divEl = document.createElement("div");
            var brEl = document.createElement("br");
            h4Eldate.textContent = info[i][0]
            h4ElTemp.textContent = 'Temp: ' + info[i][1] + ' ºF'
            h4ElTWind.textContent = 'Wind: ' + info[i][2] + ' MPH'
            h4ElHumidite.textContent = 'Humidity: ' + info[i][3] + ' %'
            imgEl.setAttribute("alt", info[i][4])
            imgEl.setAttribute("src", info[i][5])


            divEl.setAttribute('class', 'weather-info')
            divEl.append(h4Eldate, brEl, imgEl, brEl, h4ElTemp, brEl, h4ElTWind, brEl, h4ElHumidite)
            next5.append(divEl)

        }
    }

}