function goBackPage(){
    currentURLList = window.location.href.split('/')
    currentURLList[currentURLList.length-1] = 'index.html'
    newURL = currentURLList.join('/')
    window.location.href = newURL
}

let date = localStorage.getItem('endDate')
document.getElementById('dateDisplay').innerHTML = "Entered Date : " + String(String(date).split("/").reverse()).replace(/,/g,"/")

// need to replace current date with enterd start date

var formattedDate = new Date(date.replace(/\//g,"-"));
const timeSinceEpochinMSForEntered = formattedDate.getTime()
var currentDate = new Date()
const timeSinceEpochinMSForNow = currentDate.getTime()
currentDateList = [currentDate.getDate(),currentDate.getMonth(),currentDate.getFullYear()]

var timeDifference = timeSinceEpochinMSForEntered - timeSinceEpochinMSForNow
document.getElementById('timeSinceNowms').innerHTML = "Time since now : " + String(timeDifference/1000) + "seconds"

var completeYears = Math.floor(timeDifference / 31556952000.0)
if (timeDifference < 0) {
    completeYears = completeYears + 1
}

var remainingTime = timeDifference - (completeYears * 31556952000.0)
var days = (remainingTime/(86400000)).toFixed(2)

if (completeYears == 0){
    document.getElementById("timeSinceNowTotalYears").innerHTML = "Time since now : " + days + " days"
} else {
    document.getElementById("timeSinceNowTotalYears").innerHTML = "Time since now : " + String(completeYears) + "  years " + days + " days"
}
