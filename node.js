

var testEven = new Promise(function(resolve, reject) {
    if(Date.now() % 2 === 0) {
        resolve('Even');
    } else {
        reject('Odd');
    }
})

// THEN STATEMENT 
// FIST ONE CHECKS IF IT RUN SUCESSULLY OR FAULTY IN ONE CODE BLOCK
/*
testEven.then(function(result) {
  console.log(result);
}, function(err) {
  console.error(err);
});
*/
// CATCH - TO check spesifcly for errors!
testEven.then(function(result){
    console.log(result);
    throw 'Boom!';
})
.catch(function(err){
    console.log(err);
});