//Task 1
console.log('=====Start of Task 1====');
let arrays = [[1, 2, 3], [4, 5], [6, 8, 12], 96];
let resultArray = arrays.reduce((res, current) => {
    return res.concat(current);
}, []);
console.log(`Result array is: `, resultArray);


//Task 2
console.log('=====Start of Task 2====');


function User(firstName = '', SecondName = '', age = 0, city = '') {
    this.first_name = firstName;
    this.second_name = SecondName;
    this.age = age;
    this.city = city;
}

const user1 = new User('Ivan', 'Ivanov', 145, 'Minsk');
const user2 = new User('Petr', 'Petrov', 25, 'Minsk');

console.log(user1, user2);

//Task 3
console.log('=====Start of Task 3====');
function showUser() {
    console.log('name: ', this.first_name);
    console.log('second name: ', this.second_name);
    console.log('age: ', this.age);
    console.log('city: ', this.city);
    console.log(`====`);
}

let showUser1 = showUser.bind(user1);
let showUser2 = showUser.bind(user2);
console.log(`User 1:`);
showUser1();
console.log(`User 2:`);
showUser2();
