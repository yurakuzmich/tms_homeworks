

//Task 2 
function sum(...arguments) {
    let output = 0;
    console.log(arguments);
    for (arg in arguments) {
        if (typeof (arguments[arg]) === 'number' && !isNaN(arguments[arg])) {
            output += arguments[arg];
        }
    }
    return output;
}

console.log(sum(2, 4, 'mama', NaN, 5, 11, ''));

//Task 3 sort and indexOf
function sortArray() {
    let arr = [1, 2, 56, 28, 90, 5, 6];
    arr.sort(mySortFunction);
    console.log(arr);

    return arr.indexOf(6);
}

function mySortFunction(a, b) {
    return a - b;
}

console.log(sortArray());

// Task 4
function sortUsers() {
    let users = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}, {name: 'Pavel', age: 24}, {name: 'Sasha', age: 29}];
        
    let underEigteen = users.filter(user => user.age < 18);
    let overEigteen = users.filter(user => user.age >= 18 );
    console.log(underEigteen);
    console.log(overEigteen);
}

sortUsers();