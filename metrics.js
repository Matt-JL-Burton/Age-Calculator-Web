let date = localStorage.getItem('Date')
document.getElementById('dateDisplay').innerHTML = date
var formattedDate = (document.getElementById('mainDate').value).replace(/-/g,"-"); //FIXME: need to replace all / with - in a string 
console.log(formattedDate)
// console.log(date.split('/')[0],date.split('/')[1],date.split('/')[2])
// console.log(timeSinceEpoch)