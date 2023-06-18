const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('task-input');
    const timeSelect = document.getElementById('time-select');
    const hourSelect = document.getElementById('hour-select');
    const diaTasks = document.getElementById('dia-tasks');
    const noiteTasks = document.getElementById('noite-tasks');

    addTaskButton.addEventListener('click', function () {
      const task = taskInput.value;
      const time = timeSelect.value;
      const hour = hourSelect.value;
      const taskElement = document.createElement('li');
      taskElement.textContent = task + ' (' + hour + ')';

      if (time === 'dia') {
        diaTasks.querySelector('ol').appendChild(taskElement);
      } else if (time === 'noite') {
        noiteTasks.querySelector('ol').appendChild(taskElement);
      }

      taskInput.value = '';
    });