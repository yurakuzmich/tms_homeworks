//Task 1
let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }
let userName = user.name;
let userAge = user.years;
let userCar = user.car;
let userOtherInfo = {
    telePhone: user.telePhone,
    city: user.city
};

console.log(userName, userAge, userCar, userOtherInfo);

//Task 2
// let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"];

//Task 3
function nowDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    
    let output = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    console.log(output);
}

nowDate();