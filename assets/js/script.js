console.log('I\'m in')

var API_KEY = '&appid=995a84ed458b98a3593eb1da174d8edf'
var FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
var STORE_NAME = 'cities'
var REQUEST_URL

var btn = document.getElementById('history-btn')
var c = document.getElementById('search-history')
var userInput = document.getElementById('user-input')

var cities = []
var forecast = []
var dayInfo = {
    date: '',
    temp: 0,
    wind: 0,
    humidity: 0,
    img: '',
    imgDesc: ''
}

load()

btn.addEventListener('click', function () {
    // btn.setAttribute("style", 'display: none;')
    // c.setAttribute('style', 'display:block')
    save(userInput.value)
    REQUEST_URL = FORECAST_URL + userInput.value.trim() + API_KEY
    getData(REQUEST_URL)
    dataCollector()
    // saveForecast('forecast')
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
        .then(function (dat) {
            var data = dat.list
            var day = 99
            var tmp
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                tmp = (data[i].dt_txt).slice(8, 11)
                if (day != tmp) {
                    forecast.push(data[i])
                    day = tmp
                }
            }
            saveForecast('forecast')
        })
}
//svae data to localStorage
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
//svae forcast to localStorage
function saveForecast(store) {
    localStorage.setItem(store, JSON.stringify(forecast))
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
function dataCollector() {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        tmp = (data[i].dt_txt).slice(8, 11)
        if (day != tmp) {
            console.log(tmp, data[i])
            // dayInfo.date = (data[i].dt_txt).slice(0, 11)
            // dayInfo.temp = data[i].main.temp
            // dayInfo.wind = data[i].wind.speed
            // dayInfo.humidity = data[i].main.humidity
            // dayInfo.imgDesc = data[i].weather[0].description
            // dayInfo.img = data[i].weather[0].icon
            forecast.push(data[i])
            day = tmp
        }
    }
    saveForecast('forecast')
    console.log(forecast)
    setIcon()

}
// set the Icon for the forecast
function setIcon() {
    forecast = JSON.parse(localStorage.getItem('forecast'))
    for (var i = 0; i < forecast.length; i++) {
        console.log('tmp', forecast[i])

    }
}

