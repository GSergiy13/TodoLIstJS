import TodosRepository from './todosRepository.js';
import TodosComponent from './todosComponent.js';

 const todoListApp = () => {
    const todosRepository = new TodosRepository()
    const todosComponent = new TodosComponent('todolist', todosRepository)
    
    todosComponent.render();
};

export default todoListApp;