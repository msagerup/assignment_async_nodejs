/*var time = new Promise (function(resolve, reject){
    setTimeout (function (){
        resolve ('Hello Promise');
    },1000)
    
});
time.then (function(message){
    console.log(message)
})
    .catch(function(err){
        console.error(err)
    });
*/
function delay(milliseconds) {
    return new Promise (function(resolve, reject) {
        setTimeout (function () {
            resolve (milliseconds)
        },milliseconds)
    });
};

/*

function countDown (time) {
    for (var i = time; i >= 100; i-=100) {
        console.log(time);
    };
};


*/

function countDown (time) {
    if(time >= -1000) {
        console.log(time);
        return delay(time - 100);
    } else {
        console.log('CountDown complete');
    };
};

delay(1000)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)
    .then(countDown)



var squared = function(numb) {
    return new Promise (function(resole,reject){
        if (typeof numb === 'number') {
            resole(numb * numb);
        } else {
            reject('Not a number!')
        }
    });
};

var myArray = [1,2,3,4,5,6];
myArray = myArray.map(function(numb) {
    return squared(numb);
});

Promise.all(myArray)
    .then(function(results) {
        console.log(results)
    });







function doBadThing(forRealz){
    return new Promise(function(resole,reject){
        if(forRealz === false){
            throw 'What\'s going on?' 
            resole('Yay!');
        } else {
            reject('forRealz is truthy');
        }
    });
};

doBadThing(false)
.then(function(result){
    console.log(result);
})
.catch(function(err){
    console.error(err)
});
