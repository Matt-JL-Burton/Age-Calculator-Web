function workOutPrime() {
    var multiplactionOfPreviousPrimes = 1
    for (var i = 0; i < listOfPrimes.length; i ++){
        multiplactionOfPreviousPrimes = multiplactionOfPreviousPrimes *  listOfPrimes[i]
    }
    listOfPrimes.push(multiplactionOfPreviousPrimes + 1)
    console.log(listOfPrimes)
};

let listOfPrimes = [2];

setInterval(workOutPrime,5000);
// streaking 2
