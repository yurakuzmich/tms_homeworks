let arr = [1, 10, 25, 67, 87, 56];
let arr1 = [];
let arr2 = [];

//Functions for tasks

//Task1 
function doTask1(arr) {
    console.log("Task 1:");
    let leng = arr.push(4);
    console.log('New array with 4: ', arr);
    console.log('New array length: ', leng);
    arr.unshift(arr.pop());
    console.log('Finished array is: ', arr);
    return arr;
}
 
//OUTPUT
doTask1(arr);