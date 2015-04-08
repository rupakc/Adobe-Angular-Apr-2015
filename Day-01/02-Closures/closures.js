1. Create an object "spinner" that exhibits the following behavior

spinner.up(); // => 1
spinner.up(); // => 2
spinner.up(); // => 3
spinner.up(); // => 4

spinner.down(); // => 3
spinner.down(); // => 2
spinner.down(); // => 1
spinner.down(); // => 0
spinner.down(); // => -1

function getSpiner(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    var obj = {
        up : increment,
        down : decrement
    };
    return obj
}



write a function that will check if the given number is a prime number or not


function getPrimeFinder(){
    var cache = {};
    function checkPrime(n){
        if (typeof cache[n] !== "undefined"){
            return cache[n];
        }
        console.log("processing");
        if (n <= 3) {
            cache[n] = true;
        } else {
            cache[n] = true;
            for(var i=2; i <= (n/2); i++){
                if (n % i === 0){
                    cache[n] = false;
                    break;
                }
            }
        }
        return cache[n];
    }
    return checkPrime;
}

function getPrimeFinder(){
    var cache={};
    function checkPrime(n){
        console.log("processing");
        if (n <= 3) return true;
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = checkPrime(n);
        return cache[n];
    }
}

//***********************************************

function checkPrime(n){
    console.log("processing");
    if (n <= 3) return true;
    for(var i=2; i <= (n/2); i++)
        if (n % i === 0) return false;
    return true;
}

function memorize(fn){
    var cache={};
    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = fn(n);
        return cache[n];
    }
}

var isPrime = memorize(checkPrime);

//***********************************************

function memorize(fn){
    var cache={};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === "undefined")
            cache[key] = fn.apply(this,arguments);
        return cache[key];
    }
}





















