function getDataFromDateBox() {
    var enteredDate = (document.getElementById('MainDate').value).replace(/-/g,"/");
    if (!(isNaN(Date.parse(enteredDate)))) {
        console.log('Valid date')
        currentURLList = window.location.href.split('/')    
        currentURLList[currentURLList.length-1] = 'metrics.html'
        newURL = currentURLList.join('/')
        window.location.href = newURL
    } else {
        console.log("invalid data")
        // add error message
    }
};

// TODO: 
// need to learn to import modules