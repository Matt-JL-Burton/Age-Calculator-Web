let date = localStorage.getItem('Date')
document.getElementById('dateDisplay').innerHTML = "Entered Date : " + String(date)

var formattedDate = new Date(date.replace(/\//g,"-"));
const timeSinceEpochinMSForEntered = formattedDate.getTime()
var formattedDateNow = new Date()
const timeSinceEpochinMSForNow = new Date()
var timeDifference = timeSinceEpochinMSForEntered - timeSinceEpochinMSForNow
document.getElementById('timeSinceNowms').innerHTML = "Time since now : " + String(timeDifference)

// FIXME: need to fix this to find the difference in time between two dates
var year = Math.floor(timeDifference / 31556952000.0) 
var remainingTime = timeDifference - (year * 31556952000.0)
var months = Math.floor(timeDifference)