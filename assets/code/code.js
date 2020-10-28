const offset = 60;
const logo = document.getElementById('logo');
const mainMenu = document.querySelector('.nav-menu');
const menuItems = document.querySelectorAll('.nav-menu a');
const changeTabButtons = document.querySelectorAll('.tabs__changebutton');
const tabs = document.querySelectorAll('.tabs__singletab');

// console.log(mainMenu);

window.onload = function () {
    // logo listener
    logo.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        );
        clearMenuSelecting();
    });

    // menu listener
    mainMenu.addEventListener('click', clickOnMainMenuItem);

    //add listeners for tabs
    for (let i = 0; i < changeTabButtons.length; i++) {
        changeTabButtons[i].addEventListener('click', setActiveStatus)
    }

    //listeners for scrolling
    document.addEventListener('scroll', onScroll);
}

function setActiveStatus(event) {
    event.preventDefault();
    // console.log(event.currentTarget);
    let clicked = event.currentTarget;
    for (let i = 0; i < changeTabButtons.length; i++) {
        changeTabButtons[i].classList.remove('tabs__changebutton_selected');
    }
    clicked.classList.add('tabs__changebutton_selected');
    clickedTarget = clicked.getAttribute('href').substr(1);
    changeTab(clickedTarget);
    // console.log(clickedTarget);
}

function changeTab(target) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tabs__singletab_visible');
        console.log(tabs[i]);
    }
    let tabToShow = document.getElementById(target);
    tabToShow.classList.add('tabs__singletab_visible');
}

function clickOnMainMenuItem(event) {
    event.preventDefault();
    let clickedElement = event.target;
    if (clickedElement.tagName === 'A') {
        slideToClickedElement(clickedElement);
        clearMenuSelecting();
        clickedElement.classList.add('selected');
    }
}

function clearMenuSelecting() {
    menuItems.forEach((item) => {
        item.classList.remove('selected');
    });
}

function slideToClickedElement(sliderTarget) {
    // console.log(document.documentElement.clientWidth);

    let targetHref = sliderTarget.getAttribute('href').substr(1);
    target = document.getElementById(targetHref);
    if (target === null) {
        target = document.body;
    }

    let targetPosition = target.offsetTop;
    window.scrollTo({
        top: targetPosition - offset,
        left: 0,
        behavior: 'smooth',
    });
    console.log(`Moved to ${targetPosition - offset} pixels`);
}

function onScroll() {
    const currentPosition = window.scrollY + offset;
    const divs = document.querySelectorAll('.wrapper');
    // console.log(divs);
    // const links = document.querySelectorAll('.main-navigation-menu__item');
    divs.forEach((el) => {
        if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
            menuItems.forEach((a) => {
                a.classList.remove('selected');
                // console.log(a);

                if (el.getAttribute('id') === a.getAttribute('href').substr(1)) {
                    a.classList.add('selected');
                }
            });
        }
    });
    // if (currentPosition <= 100) {
    //     let homeLink = document.querySelector('#main-navigation-menu__homelink');
    //     homeLink.classList.add('main-navigation-menu__item_active');
    // }
}