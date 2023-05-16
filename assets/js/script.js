console.log('I\'m in')

var API_KEY = '&appid=995a84ed458b98a3593eb1da174d8edf'
var FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
var STORE_NAME = 'cities'
var REQUEST_URL

var btn = document.getElementById('history-btn')
var c = document.getElementById('search-history')
var userInput = document.getElementById('user-input')

var cities = []
var forecast = {}

load()

btn.addEventListener('click', function () {
    // btn.setAttribute("style", 'display: none;')
    // c.setAttribute('style', 'display:block')
    // cities.unshift(userInput.value)
    REQUEST_URL = FORECAST_URL + userInput.value.trim() + API_KEY
    console.log(REQUEST_URL)
    getData(REQUEST_URL)
    console.log(save(userInput.value))

})



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
        .then(function (data) {
            console.log(data.list[0])
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