function getDataFromDateBox() {
    var startDate = (document.getElementById('startDate').value).replace(/-/g,"/");
    if (!(isNaN(Date.parse(startDate)))) {
        localStorage.setItem('startDate',startDate)
    } else {
        document.getElementById('validDateErrorMes').style.display = "none"
        setTimeout(function(){
            document.getElementById('validDateErrorMes').style.display = "block"
        },100)
    }
    var endDate = (document.getElementById('endDate').value).replace(/-/g,"/");
    if (!(isNaN(Date.parse(endDate)))) {
        localStorage.setItem('endDate',endDate)
    } else {
        // the function of the timeout is to flash the error message so the user knows it is wrong again
        document.getElementById('validDateErrorMes').style.display = "none"
        setTimeout(function(){
            document.getElementById('validDateErrorMes').style.display = "block"
        },100)
    }
    if ((!(isNaN(Date.parse(endDate)))) && (!(isNaN(Date.parse(startDate))))) {
        document.getElementById('MainPageMainDiv').style.display = "none"
        document.getElementById('mainPageLoadingDiv').style.display = "flex"
        currentURLList = window.location.href.split('/')    
        currentURLList[currentURLList.length-1] = 'metrics.html'
        newURL = currentURLList.join('/')
        window.location.href = newURL
    }
};

// TODO: 
// need to learn to import modules