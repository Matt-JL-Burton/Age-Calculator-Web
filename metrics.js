let date = localStorage.getItem('Date')
document.getElementById('dateDisplay').innerHTML = date
var formattedDate = new Date(date.replace(/\//g,"-"));
const timeSinceEpochinMS = formattedDate.getTime()
console.log(timeSinceEpochinMS)