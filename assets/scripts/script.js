const buttonShow = document.getElementById("button-show");
const buttonHide = document.getElementById("button-hide");
const list = document.querySelector(".list-container");

const buttons = [buttonShow, buttonHide];


buttons.forEach(button => {
    button.addEventListener('click', toggleList);
});

function toggleList(e) {
    
    e.target.dataset.action === 'hide' ? hideList() : showList();
    
    buttons.forEach(button => {
        button === e.target ? button.disabled = true : button.disabled = false;
        button.classList.toggle('active');
    });
}

function showList() {
    list.classList.remove('hide');
}

function hideList() {
    list.classList.add('hide');
}