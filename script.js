var time = new Promise (function(resolve, reject){
    setTimeout (function (){
        resolve ('Hello Promise');
    },1000)
    
});
time.then (function(message){
    console.log(message)
});