var listOfPrime = [2];
while (true) {
    var initialConstOfMultiplication = 1;
    for (var i = 0; i < listOfPrime.length; i++){
        initialConstOfMultiplication = initialConstOfMultiplication * listOfPrime[i]
    } 
    listOfPrime.push(initialConstOfMultiplication+1)
    console.log(listOfPrime)
}
