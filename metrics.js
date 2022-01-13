function workOutCompleteMonthsPass(timeInMs,startDate,completedyears) {
    let listOfMothsDates = [31,28,31,30,31,30,31,31,30,31,30,31]
}

let date = localStorage.getItem('Date')
document.getElementById('dateDisplay').innerHTML = "Entered Date : " + String(date)

var formattedDate = new Date(date.replace(/\//g,"-"));
const timeSinceEpochinMSForEntered = formattedDate.getTime()
var formattedDateNow = new Date()
const timeSinceEpochinMSForNow = new Date()
var timeDifference = timeSinceEpochinMSForEntered - timeSinceEpochinMSForNow
document.getElementById('timeSinceNowms').innerHTML = "Time since now : " + String(timeDifference) + "ms"

// FIXME: need to fix this to find the difference in time between two dates
var completeYears = Math.floor(timeDifference / 31556952000.0)
var remainingTime = timeDifference - (completeYears * 31556952000.0)

document.getElementById("timeSinceNowTotalYears").innerHTML = "Time since now : " + String(completeYears) + " complete years"
var months = Math.floor(timeDifference)