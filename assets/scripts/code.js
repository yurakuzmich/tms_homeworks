const header = document.getElementsByTagName('h1');
const list = document.querySelector('ul');
const allItems = document.querySelectorAll('li');
const evenItems = document.querySelectorAll('li:nth-child(2n)');
const oddItems = document.querySelectorAll('li:nth-child(2n+1)');
const buttonToggle = document.querySelector('#toggle');



console.log(header, list, allItems, evenItems, oddItems);
setStyles();

setTimeout(function toggle() {
    changeStyles();
    setTimeout(toggle, 2000);
}, 2000);

buttonToggle.addEventListener('click', changeStyles);

function setStyles() {
    evenItems.forEach(element => {
        element.style.color = 'red';
    });
    oddItems.forEach(element => {
        element.style.color = 'blue';
    });
}

function changeStyles() {
    allItems.forEach(element => {
        element.style.color === 'red' ? element.style.color = 'blue' : element.style.color = 'red';
    });
}