function getDataFromDateBox() {
    var enteredDate = (document.getElementById('mainDate').value).replace(/-/g,"/");
    if (!(isNaN(Date.parse(enteredDate)))) {
        console.log('Valid date')
        currentURLList = window.location.href.split('/')    
        currentURLList[currentURLList.length-1] = 'metrics.html'
        newURL = currentURLList.join('/')
        window.location.href = newURL
    } else {
        document.getElementById('validDateErrorMes').style.display = "block"
    }
};
// TODO: 
// need to learn to import modules