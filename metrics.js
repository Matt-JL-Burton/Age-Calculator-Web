function workOutCompleteMonthsPass(timeInMs,startDate,completedyears) {
    var listOfDate = startDate.split("/")
    let listOfMothsDates = [31,28,31,30,31,30,31,31,30,31,30,31]
}

function goBackPage(){
    currentURLList = window.location.href.split('/')    
    currentURLList[currentURLList.length-1] = 'index.html'
    newURL = currentURLList.join('/')
    window.location.href = newURL
}

let date = localStorage.getItem('Date')
document.getElementById('dateDisplay').innerHTML = "Entered Date : " + String(String(date).split("/").reverse()).replace(/,/g,"/")

var formattedDate = new Date(date.replace(/\//g,"-"));
const timeSinceEpochinMSForEntered = formattedDate.getTime()
var formattedDateNow = new Date()
const timeSinceEpochinMSForNow = new Date()
var timeDifference = timeSinceEpochinMSForEntered - timeSinceEpochinMSForNow
document.getElementById('timeSinceNowms').innerHTML = "Time since now : " + String(timeDifference) + "ms"

var completeYears = Math.floor(timeDifference / 31556952000.0)
var remainingTime = timeDifference - (completeYears * 31556952000.0)

document.getElementById("timeSinceNowTotalYears").innerHTML = "Time since now : " + String(completeYears) + " complete years"
var months = Math.floor(timeDifference)