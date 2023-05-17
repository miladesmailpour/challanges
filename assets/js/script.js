var API_KEY = '&appid=995a84ed458b98a3593eb1da174d8edf'
var FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
var STORE_NAME = 'cities'
var REQUEST_URL
var ICON_URL = 'https://openweathermap.org/img/w/'
var TODAY = dayjs().format('DD/MM/YYYY')
var btn = document.getElementById('history-btn')
var historyContainer = document.getElementById('search-history')
var userInput = document.getElementById('user-input')
var cityInfo = document.getElementById('city-info').children
var weatherInfo = document.getElementById('weather-info').children
var next5 = document.getElementById('display-next5')
var linkBtn = document.getElementById('link-btn')
var cities = []
var forecast = []
var dayInfo = []

// loading the page and initail data
load()
cityInfo[1].textContent = TODAY

// Handle the display the history in diffrent screen size
btn.addEventListener('click', function (event) {
    event.preventDefault();
    var displayStatus = historyContainer.style.display
    if (displayStatus == 'block') {
        historyContainer.setAttribute('style', 'display:none')
    }
    else {
        historyContainer.setAttribute('style', 'display:block')
    }
})

// Handleing the and search for weather based on search history
historyContainer.addEventListener("click", function (event) {
    event.preventDefault();
    el = event.target
    if (el.getAttribute('class') === 'link-btn') {

        REQUEST_URL = FORECAST_URL + el.textContent.trim() + API_KEY
        getData(REQUEST_URL)
        var info = JSON.parse((localStorage.getItem('weatherInfo')))
        display(el.textContent, info)
    }
})

// Handleing the and search for weather based on user input
userInput.addEventListener("keyup", function (event) {
    event.preventDefault();

    if (event.code === 'Enter') {
        if (userInput.value) {
            save(userInput.value)
            // document.location.reload();
            REQUEST_URL = FORECAST_URL + userInput.value.trim() + API_KEY
            getData(REQUEST_URL)
            var info = JSON.parse((localStorage.getItem('weatherInfo')))
            display(userInput.value, info)
        } else {
            alert('please enter the city you want to look at its weather')
        }
    }
})

// fetch the forcase data from open weather api
function getData(endPoint) {
    fetch(endPoint)
        .then(function (response) {
            if (response.status != 200) {
                console.error('No data recived from Open Weather API.')
                alert('NO data founded for your input!')
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
    var history = JSON.parse(localStorage.getItem('cities'))
    if (history) {
        displayHistory(history)
    }
}

// collecting the required data for elements
// set the Icon for the forecast in to weatherInfo localstorage
function setIcon() {
    var info = []
    data = JSON.parse(localStorage.getItem('forecast'))
    localStorage.removeItem('weatherInfo')

    localStorage.setItem('weatherInfo', JSON.stringify(info))

    for (var i = 0; i < data.length; i++) {
        dayInfo[0] = (data[i].dt_txt).slice(0, 11)
        dayInfo[1] = data[i].main.temp
        dayInfo[2] = data[i].wind.speed
        dayInfo[3] = data[i].main.humidity
        dayInfo[4] = data[i].weather[0].description
        dayInfo[5] = ICON_URL + data[i].weather[0].icon + '.png'
        info = JSON.parse(localStorage.getItem('weatherInfo'))
        if (info) {
            info.unshift(dayInfo)
        }
        localStorage.setItem('weatherInfo', JSON.stringify(info))
    }
    localStorage.removeItem('forecast')
    forecast = []
}

// display weather info on page// display weather info on page
function display(city, info) {
    cityInfo[0].textContent = city.toUpperCase() + ' '
    cityInfo[1].textContent = TODAY
    cityInfo[2].setAttribute("src", info[0][5])
    weatherInfo[1].textContent = info[0][1] + ' ºF'
    weatherInfo[4].textContent = info[0][2] + ' MPH'
    weatherInfo[7].textContent = info[0][3] + ' %'

    console.log(next5.children[0])
    for (var i = 1; i < info.length; i++) {
        next5.children[i - 1].children[0].textContent = info[i][0]
        next5.children[i - 1].children[1].setAttribute("alt", info[i][4])
        next5.children[i - 1].children[1].setAttribute('src', info[i][5])
        next5.children[i - 1].children[2].textContent = 'Temp: ' + info[i][1] + ' ºF'
        next5.children[i - 1].children[3].textContent = 'Wind: ' + info[i][2] + ' MPH'
        next5.children[i - 1].children[4].textContent = 'Humidity: ' + info[i][3] + ' %'
    }
}

// display search history on page
function displayHistory(history) {
    console.log(history)
    for (var i = 0; i < history.length; i++) {
        var btn = document.createElement('button')
        btn.setAttribute('class', 'link-btn')
        btn.textContent = history[i].toUpperCase()
        historyContainer.append(btn)

    }

}