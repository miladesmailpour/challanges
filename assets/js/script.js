console.log('I\'m in')

var API_KEY = '&appid=995a84ed458b98a3593eb1da174d8edf'
var FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
var STORE_NAME = 'cities'
var REQUEST_URL
var ICON_URL = 'https://openweathermap.org/img/w/'

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
    // setIcon()
    // dataCollector()
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
        dayInfo.date = (data[i].dt_txt).slice(0, 11)
        console.log((data[i].dt_txt).slice(0, 11), dayInfo.date)
        dayInfo.temp = data[i].main.temp
        dayInfo.wind = data[i].wind.speed
        dayInfo.humidity = data[i].main.humidity
        dayInfo.imgDesc = data[i].weather[0].description
        dayInfo.img = ICON_URL + data[i].weather[0].icon + '.png'
        weatherInfo = JSON.parse(localStorage.getItem('weatherInfo'))
        if (weatherInfo)
            weatherInfo.push(dayInfo)
        localStorage.setItem('weatherInfo', JSON.stringify(weatherInfo))
    }
}


