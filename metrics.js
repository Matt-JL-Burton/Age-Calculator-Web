function daysAndMonthsCalculations(currentDate,endDate,completeYears,timeDifference) {
    console.log(currentDate,endDate)
    var listOfMonthlyLength = [31,28,31,30,31,30,31,31,30,31,30,31]
    currentDate[2] = currentDate[2] + completeYears
    days = endDate[0] - currentDate[0]
    month = endDate[1] - currentDate[1]
    if ((timeDifference < 0 && days > 0) || (timeDifference > 0 && days < 0)){
        if (completeYears < 0){
            month = month -1
        } else {
            month = month + 1
        }
    }
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
currentDateList = [currentDate.getDate(),currentDate.getMonth(),currentDate.getFullYear()]

var timeDifference = timeSinceEpochinMSForEntered - timeSinceEpochinMSForNow
document.getElementById('timeSinceNowms').innerHTML = "Time since now : " + String(timeDifference/1000) + "seconds"

var completeYears = Math.floor(timeDifference / 31556952000.0)
if (timeDifference < 0) {
    completeYears = completeYears + 1
}

var remainingTime = timeDifference - (completeYears * 31556952000.0)

document.getElementById("timeSinceNowTotalYears").innerHTML = "Time since now : " + String(completeYears) + " complete years"

date = date.split("/")
for (i = 0; i < date.length; i ++){
    date[i] = Number(date[i])
}
daysAndMonthsCalculations(currentDateList,date.reverse(),completeYears,timeDifference)