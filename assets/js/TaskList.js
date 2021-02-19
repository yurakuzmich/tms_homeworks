
// Begin class definition
class TaskList {

    constructor(showListButton, hideListButton, addTaskButton, clearButton, addTaskElement, addTaskInput, taskListWrapper) {
        this.showListButton = showListButton;
        this.hideListButton = hideListButton;
        this.addTaskButton = addTaskButton;
        this.clearButton = clearButton;
        this.addTaskElement = addTaskElement;
        this.addTaskInput = addTaskInput;
        this.taskListWrapper = taskListWrapper;
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

        this.showListButton.addEventListener('click', () => {
            this.taskListWrapper.classList.remove('hide');   
        });

        this.hideListButton.addEventListener('click', () => {
            this.taskListWrapper.classList.add('hide');  
        });
        
        this.addTaskInput.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                this.setTask();
                this.addTaskInput.value = '';
                this.getTasks();
            };
        });

        this.clearButton.addEventListener('click', () => {
            localStorage.removeItem('tasks');
            this.tasks = [];
            this.getTasks();
            alert(`Список задач очищен`);
        });

        this.getTasks();
    }

    testMethod() {
        console.log(this.showListButton);
        console.log(this.hideListButton);
        console.log(this.addTaskButton);
        console.log(this.clearButton);
        console.log(this.addTaskInput);
        console.log(this.taskListWrapper);
    }

    setTask() {
        if (this.addTaskInput.value.length < 10) {
            alert('Лентяй, введи хотя бы 10 символов');
        } else {
            let id = localStorage.length + 1;
            this.tasks = [...this.tasks, { 'id': id, 'task': this.addTaskInput.value, 'status': 0 }]
            this.storeTasks(this.tasks);
            this.renderTask({ 'id': id, 'task': this.addTaskInput.value, 'status': 0 });
        }
    }

    storeTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks() {
        let tasks = localStorage.getItem('tasks');
        if (tasks) {
            console.log(JSON.parse(localStorage.tasks));
            this.renderTasks();
        } else {
            this.taskListWrapper.innerHTML = 'Задач нет';
        }
    }

    renderTasks() {
        let allTasks = JSON.parse(localStorage.getItem('tasks'));

        this.taskListWrapper.innerHTML = '';
        allTasks.forEach(task => {
            this.renderTask(task);
        });
    }

    renderTask(task) {
        let taskId = task.id;
        let taskBody = task.task;
        let taskStatus = task.status;
        let taskStatusText = taskStatus === 0 ? 'not done' : 'done';

        //create task element
        let taskElement = document.createElement('div');
        taskElement.classList.add('single-task');
        taskElement.innerHTML = `<input type="checkbox">${taskId} ${taskBody} | ${taskStatusText}`;
        this.taskListWrapper.appendChild(taskElement);
    }
}

// End class definition