// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Função para adicionar uma nova tarefa
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    }
  
    // Clique no botão "Adicionar"
    addTaskButton.addEventListener('click', addTask);
  
    // Pressionar "Enter" no campo de entrada
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Cria um item de tarefa
    function createTaskItem(taskText) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
  
      const span = document.createElement('span');
      span.textContent = taskText;
  
      const buttonGroup = document.createElement('div');
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Concluir';
      completeButton.className = 'btn btn-sm btn-completed complete-btn';
      completeButton.addEventListener('click', () => {
        // Adiciona a classe "completed" para mudar o fundo para verde
        li.classList.toggle('completed');
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Excluir';
      deleteButton.className = 'btn btn-sm btn-delete';
      deleteButton.addEventListener('click', () => {
        li.remove();
      });
  
      buttonGroup.appendChild(completeButton);
      buttonGroup.appendChild(deleteButton);
      li.appendChild(span);
      li.appendChild(buttonGroup);
  
      return li;
    }
  });
  