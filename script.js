function getDataFromDateBox() {
    var entereDate = document.getElementById('MainDate').value;
    // console.log(entereDate)
    // if data is Valid then go to show metrics Page (code below)
    currentURLList = window.location.href.split('/')    
    currentURLList[currentURLList.length-1] = 'metrics.html'
    newURL = currentURLList.join('/')
    window.location.href = newURL
};