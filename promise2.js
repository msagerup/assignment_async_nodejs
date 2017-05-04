var nums = [1, 2, 3, 4];
nums = nums.map(function(i){
    return Promise.resolve(i + 1);
});

Promise.all(nums)
.then (function(results){
    debugger;
    console.log(results);
});