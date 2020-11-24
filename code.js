let arr = [1, 10, 25, 67, 87, 56];
let arr1 = [2, 5, 90, 4];
let arr2 = [];
let arr3 = [];
let users

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

//Task 2
function doTask2(array1, array2) {
    console.log("Task 2:");
    
    return arr2 = array1.concat(array2);
}

//Task 3
function doTask3(array) {
    console.log("Task 3:");

    let index = array.indexOf(90);
    console.log("Element 90 has index ", index);
    array.splice(index, 1, 19, 2, 91);
    console.log("Array with 19, 2, 91 is ", array);

}

//Task 4
function doTask4(array) {
    console.log("Task 4:");
    arr3 = array.slice(-4);
    console.log("Arr3 is: ", arr3);
    console.log("Arr2 wasn't changed: ", arr2);
    arr3.sort(mySort);
    console.log("Sorted arr3 is: ", arr3);
    return arr3;

}

function mySort(a, b) {
    return a - b;
}

//OUTPUT
doTask1(arr);
console.log("Concatenated array is: ", doTask2(arr1, arr));
doTask3(arr2);
doTask4(arr2);



Объект Шарлотка {
    ингредиент 1: яблоки,
    ингредиент 2: {
        ингредиент 1: мука,
        ингредиент 2: {
            ингредиент 1: яйца,
            ингредиент 2: сахар
        }
    }
}