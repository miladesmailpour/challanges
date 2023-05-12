// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(
    function () {
        var STORE_NAME = 'workDayScheduler'
        var currentDay = $('#currentDay')
        var saveBtn = $('.saveBtn')
        var workDayScheduler = []
        var today = dayjs();

        load()
        timeLine()
        display()
        saveBtn.on('click', saveHandler)


        // TODO: Add a listener for click events on the save button. This code should
        // use the id in the containing time-block as a key to save the user input in
        // local storage. HINT: What does `this` reference in the click listener
        // function? How can DOM traversal be used to get the "hour-x" id of the
        // time-block containing the button that was clicked? How might the id be
        // useful when saving the description in local storage?

        //svae data to localStorage
        function save(data) {
            var store = JSON.stringify(data)
            localStorage.setItem(STORE_NAME, store)
        }
        // retrieve data from localStorage
        function load() {
            var store = localStorage.getItem(STORE_NAME)
            if (!store) {
                var store = JSON.stringify(workDayScheduler)
                console.log('store NOT founded!', 'store initiated as empty object just now!.')
                localStorage.setItem(STORE_NAME, store)
            } else {
                workDayScheduler = JSON.parse(store)
            }
        }
        // handling save button click and save the related hour notes
        function saveHandler() {
            var parentEl = $(this).parent()
            var timeKey = parentEl.attr('id')
            var timeNote = parentEl.children('textarea').val()
            var flag = true

            if (timeNote.trim().length <= 0) {
                alert('Empty notes won\'t save!')
                return
            }
            load()
            if (workDayScheduler.length > 0) {
                for (var i = 0; i < workDayScheduler.length; i++) {
                    if (Object.keys(workDayScheduler[i]) == timeKey) {
                        var tmpHour = workDayScheduler[i]
                        tmpHour = Object.assign(tmpHour, { [timeKey.trim()]: timeNote.trim() })
                        workDayScheduler = Object.assign(workDayScheduler, { [timeKey.trim()]: timeNote.trim() })
                        flag = false
                    }
                }
            }
            if (flag) {
                workDayScheduler.push({ [timeKey.trim()]: timeNote.trim() })
            }
            save(workDayScheduler)
        }

        // TODO: Add code to apply the past, present, or future class to each time
        // block by comparing the id to the current hour. HINTS: How can the id
        // attribute of each time-block be used to conditionally add or remove the
        // past, present, and future classes? How can Day.js be used to get the
        // current hour in 24-hour time?

        // change the display the timeline base on the time
        function timeLine() {
            var time = parseInt(today.format('h'))
            var len = $('.container-lg').children('div').length
            var hours = $('.container-lg').children('div')
            var index

            for (var i = 0; i < len; i++) {
                index = hours.eq(i).attr('id')
                hourContainer = hours.eq(i)
                var t = parseInt(index.slice(4))
                console.log(time)

                if (t < time) {
                    hourContainer.attr('class', 'row time-block past')
                } else if (t > time) {
                    hourContainer.attr('class', 'row time-block future')
                } else {
                    hourContainer.attr('class', 'row time-block present')
                }
            }
        }

        // TODO: Add code to get any user input that was saved in localStorage and set
        // the values of the corresponding textarea elements. HINT: How can the id
        // attribute of each time-block be used to do this?

        // display the notes
        function display() {
            var len = $('.container-lg').children('div').length
            var hours = $('.description')
            var timeBlock = $('.time-block')
            var index
            load()

            if (workDayScheduler.length >= 0) {
                for (var i = 0; i < workDayScheduler.length; i++) {

                    for (var j = 0; j < len; j++) {
                        index = hours.eq(j)
                        var id = timeBlock.eq(j).attr('id')
                        if (id == Object.keys(workDayScheduler[i])) {
                            index.text(Object.values(workDayScheduler[i]))
                        }
                    }
                }
            }
        }

        // TODO: Add code to display the current date in the header of the page.
        currentDay.text(today.format("dddd, MMMM d") + "th")
    }
);


