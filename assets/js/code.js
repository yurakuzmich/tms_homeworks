const showListButton = document.querySelector('.menu__button-show');
const hideListButton = document.querySelector('.menu__button-hide');
const addTaskButton = document.querySelector('.menu__button-add');
const clearButton = document.querySelector('.menu__button-clear');
const addTaskElement = document.querySelector('.add-task');
const addTaskInput = document.querySelector('.add-task__input');
const taskListWrapper = document.querySelector('.tasklist');





const taskList = new TaskList(showListButton, hideListButton, addTaskButton, clearButton, addTaskElement, addTaskInput, taskListWrapper);
// taskList.testMethod();
// taskList.getTasks();
// localStorage.clear();