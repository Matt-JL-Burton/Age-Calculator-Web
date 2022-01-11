let date = localStorage.getItem('Date')
document.getElementById('dateDisplay').innerHTML = date
var formattedDate = new Date(date.replace(/\//g,"-")); //FIXME: need to replace all / with - in a string 
const timeSinceEpochinMS = formattedDate.getTime()
console.log(timeSinceEpochinMS)