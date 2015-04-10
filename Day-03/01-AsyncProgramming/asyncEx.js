/* Sync */
function add(x,y){
    console.log("returning result");
    var result =  x + y;
    return result;
}

function usingAdd(x,y){
    console.log("invoking operation");
    var result = add(x, y);
    console.log("result = ", result);
}

/* Async - 1*/
function addAsyncUsingCallbacks(x,y, onResult){
    setTimeout(function(){
        console.log("returning result");
        var result =  x + y;
        if (typeof onResult === "function")
            onResult( result );
    },3000);
}

function usingaddAsyncUsingCallbacks(x,y){
    console.log("invoking operation");
    addAsyncUsingCallbacks(x, y, function(result){
        console.log("result = ", result);
    });
}

/*Async - Events */
function getAdder(){
    var events = [];
    return {
        add : function(x,y){
            setTimeout(function(){
                console.log("returning result");
                var result = x + y;
                events.forEach(function(evt){
                    evt(result);
                });
            },3000);
        },
        subscribe : function(evtFn){
            events.push(evtFn);
        }
    }
};

function usingAddWithEvents(x,y){
    var adder = getAdder();
    adder.subscribe(function(result){
        console.log("result = ", result);
    });
    console.log("invoking operation");
    adder.add(100,200);
}

/*Using Promises*/
function addUsingPromise(x,y){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("returning result");
            var result = x + y;
            resolve(result);
        },3000);
    });
    return promise;
}




















