console.log('I\'m in')

var API_KEY = '46e7e576f7714418de08fb8d32cdfc56'

var btn = document.getElementById('history-btn')
var c = document.getElementById('search-history')
var userInput = document.getElementById('user-input')
var STORE_NAME = 'cities'
var city = 'Fort Erie1'
var cities = []

console.log(typeof cities, cities)
load()
console.log(typeof cities, cities)
btn.addEventListener('click', function () {
    btn.setAttribute("style", 'display: none;')
    c.setAttribute('style', 'display:block')
    cities.unshift(userInput.value)
    console.log()
    save(cities)
    console.log(typeof cities, cities)
})


//svae data to localStorage
function save(data) {
    var store = JSON.stringify(data)
    localStorage.setItem(STORE_NAME, store)
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