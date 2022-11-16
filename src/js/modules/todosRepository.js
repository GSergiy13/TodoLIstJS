import todos from './todos.js';

export default class TodosRepository {

    constructor(){
        this.todos = todos;
    }

    find(id){

    }

    findAll(filter){
        return this.todos
            .filter(note => {
                for (const filterKey in filter) {
                    return note[filterKey] === filter[filterKey]
                }
            })
    }

    getIndexById(id) {
        return this.todos.findIndex((todos) =>  todos.id === parseInt(id));
    }

    remove(id) {
        this.todos.splice(this.getIndexById(id), 1)
    }

    create(data) {   
        this.todos.push(data);
    }

    update(id, data) {
        const title = document.getElementById('title'),
              description = document.getElementById('description'),
              category = document.getElementById('category');
      let getElementById = this.todos[this.getIndexById(id)];

      
      title.value = getElementById.title; 
      description.value = getElementById.description; 
    }

}
