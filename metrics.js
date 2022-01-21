function workOutCompleteMonthsPass(timeInMs,startDate,completedyears) {
    var listOfDate = startDate.split("/").reverse()
    console.log(listOfDate)
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
var currentDate = new Date()
const timeSinceEpochinMSForNow = currentDate.getTime()

var timeDifference = timeSinceEpochinMSForEntered - timeSinceEpochinMSForNow
document.getElementById('timeSinceNowms').innerHTML = "Time since now : " + String(timeDifference/1000) + "seconds"

var completeYears = Math.floor(timeDifference / 31556952000.0)
if (timeDifference < 0) {
    completeYears = completeYears + 1
}

var remainingTime = timeDifference - (completeYears * 31556952000.0)

document.getElementById("timeSinceNowTotalYears").innerHTML = "Time since now : " + String(completeYears) + " complete years"

workOutCompleteMonthsPass(remainingTime,date,completeYears)