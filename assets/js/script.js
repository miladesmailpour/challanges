console.log('I\'m in')

var API_KEY = '46e7e576f7714418de08fb8d32cdfc56'

var btn = document.getElementById('history-btn')
var c = document.getElementById('search-history')

btn.addEventListener('click', function () {
    btn.setAttribute("style", 'display: none;')
    c.setAttribute('style', 'display:block')
})