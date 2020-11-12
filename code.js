const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');
const task4 = document.getElementById('task4');

document.addEventListener('click', (e) => {
    let clicked = e.target.id;
    switch (clicked) {
        case 'task1':
            //Задание 1
            const a1 = 4;
            const a2 = 'my very first string';
            const a3 = [1, 2, 3, 4];
            const a4 = true;
            const a5 = { value: 4 };
            const a6 = null;
            const varsArray = [];
            varsArray.push(a1);
            varsArray.push(a2);
            varsArray.push(a3);
            varsArray.push(a4);
            varsArray.push(a5);
            varsArray.push(a6);

            for (let i = 0; i <= 6; i++) {
                // console.log(varsArray);
                alert(varsArray[i]);
            }
            break;
        case 'task2':
            // Задание 2
            let clientAge = prompt('Введите возраст');
            alert(`Поздравляем, вам ${clientAge} полных лет`);
            if (clientAge < 18) {
                alert('К сожалению без справки от родителей никак...');
            } else {
                alert('Поздравляем, вы достаточно взрослый для просмотра нашего контента');
            }
            break;
        case 'task3':
            // Задание 3
            const myArr = [10, 25, 'lklk', 100, { value: 12 }];
            const summOfArray = (array) => {
                if (Array.isArray(array)) {
                    let sum = 0;
                    array.forEach(el => {
                        if (typeof (el) === 'number') {
                            sum += el;
                        }
                    });
                    return sum;
                }
            }
            console.log(`Сумма значений числовых элементов массива ${summOfArray(myArr)}`);
            alert('Look results in console');
            break;
        case 'task4':
            // Задание 4*
            let persons = [{ name: 'Ivan', age: 18 }, { name: 'Petr', age: 12 }, { name: 'Sidor', age: 25 }, { name: 'Pavel', age: 24 }, { name: 'Sasha', age: 29 }];

            const sortPersons = (persons) => {
                let underEighteen = [];
                let overEighteen = [];
                let output = {};

                persons.forEach(person => {
                    if (person.age < 18) {
                        underEighteen.push(person);
                    } else {
                        overEighteen.push(person);
                    }
                });

                output.overEighteen = overEighteen;
                output.underEighteen = underEighteen

                return output;
            }


            console.log(sortPersons(persons));
            alert('Look results in console');
            break;
    }
});

//Задание 1
// const a1 = 4;
// const a2 = 'string';
// const a3 = [1, 2, 3, 4];
// const a4 = true;
// const a5 = {value: 4};
// const a6 = null;
// const varsArray = [];
//     varsArray.push(a1);
//     varsArray.push(a2);
//     varsArray.push(a3);
//     varsArray.push(a4);
//     varsArray.push(a5);
//     varsArray.push(a6);

// for(let i = 0; i <= 6; i++) {
//     // console.log(varsArray);
//     alert(varsArray[i]);
// }


// Задание 2
// let clientAge = prompt('Введите возраст');
// alert(`Поздравляем, вам ${clientAge} полных лет`);
// if(clientAge < 18) {
//     alert('К сожалению без справки от родителей никак...');
// } else {
//     alert('Поздравляем, вы достаточно взрослый для просмотра нашего контента');
// }

// Задание 3

// const myArr = [10, 25, 'lklk', 100, { value: 12 }];

// const summOfArray = (array) => {
//     if (Array.isArray(array)) {
//         let sum = 0;
//         array.forEach(el => {
//             if (typeof (el) === 'number') {
//                 sum += el;
//             }
//         });
//         return sum;
//     }
// }

// console.log(`Сумма значений числовых элементов массива ${summOfArray(myArr)}`);




// Задание 4*
// let persons = [{ name: 'Ivan', age: 18 }, { name: 'Petr', age: 12 }, { name: 'Sidor', age: 25 }, { name: 'Pavel', age: 24 }, { name: 'Sasha', age: 29 }];

// const sortPersons = (persons) => {
//     let underEighteen = [];
//     let overEighteen = [];
//     let output = {};

//     persons.forEach(person => {
//         if (person.age < 18) {
//             underEighteen.push(person);
//         } else {
//             overEighteen.push(person);
//         }
//     });

//     output.overEighteen = overEighteen;
//     output.underEighteen = underEighteen

//     return output;
// }


// console.log(sortPersons(persons));

