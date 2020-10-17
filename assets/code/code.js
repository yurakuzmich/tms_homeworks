const changeTabButtons = document.querySelectorAll('.tabs__changebutton');
const tabs = document.querySelectorAll('.tabs__singletab');
console.log(tabs);

window.onload = function() {
    //add listeners for tabs
    for(let i = 0; i < changeTabButtons.length; i++) {
        changeTabButtons[i].addEventListener('click', setActiveStatus)
    }
}

function setActiveStatus(event) {
    // console.log(event.currentTarget);
    let clicked = event.currentTarget;
    for(let i = 0; i < changeTabButtons.length; i++) {
        changeTabButtons[i].classList.remove('tabs__changebutton_selected');
    }
    clicked.classList.add('tabs__changebutton_selected');
    clickedTarget = clicked.getAttribute('href').substr(1);
    changeTab(clickedTarget);
    // console.log(clickedTarget);
}

function changeTab (target) {
    for(let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tabs__singletab_visible');
        console.log(tabs[i]);
    }
    let tabToShow = document.getElementById(target);
    tabToShow.classList.add('tabs__singletab_visible');
}