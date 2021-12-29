function getDataFromDateBox() {
    var enteredDate = document.getElementById('MainDate').value;
    console.log(enteredDate)
    console.log(console.log(moment(enteredDate,"DD/MM/YYYY", true).isValid))

    // currentURLList = window.location.href.split('/')    
    // currentURLList[currentURLList.length-1] = 'metrics.html'
    // newURL = currentURLList.join('/')
    // window.location.href = newURL
};

// TODO: 
// need to learn to import modules