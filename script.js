function getDataFromDateBox() {
    var enteredDate = (document.getElementById('mainDate').value).replace(/-/g,"/");
    if (!(isNaN(Date.parse(enteredDate)))) {
        document.getElementById('MainPageMainDiv').style.display = "none"
        document.getElementById('mainPageLoadingDiv').style.display = "flex"
        currentURLList = window.location.href.split('/')    
        currentURLList[currentURLList.length-1] = 'metrics.html'
        newURL = currentURLList.join('/')
        dataToSendToCookie = enteredDate
        document.cookie = dataToSendToCookie
        window.location.href = newURL
        console.log(dataToSendToCookie)
    } else {
        // the function of the timeout is to flash the error message so the user knows it is wrong again
        document.getElementById('validDateErrorMes').style.display = "none"
        setTimeout(function(){
            document.getElementById('validDateErrorMes').style.display = "block"
        },100)
    }
};



// TODO: 
// need to learn to import modules