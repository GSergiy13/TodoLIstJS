import { STATUS } from "./constants.js";


export default class TodosComponent {
    constructor(id, todos){
        this.$el = document.getElementById(id);
        this.todoRepository = todos;

        this.$el.addEventListener('click', updateTodoHandler.bind(this));
        this.$el.addEventListener('click', removeTodoHandler.bind(this));
        this.$el.addEventListener('click', createTodoHandler.bind(this));
    }

    render(){
        const parentTodoList = this.$el.querySelector('.content-body');
        parentTodoList.innerHTML = '';

        this.todoRepository.findAll({status:"active"}).forEach(itemList => {
            const {title, description, category, date, id} = itemList;
    
            parentTodoList.innerHTML +=  `
                <div class="contetn-body__line">
    
                <div class="contetn-body__line-item contetn-body__line-categoriIcons">
                    <img src="#" alt="icons">
                </div>
    
                <div class="contetn-body__line-item contetn-body__line-name">
                    ${title}
                </div>
                
                <div class="contetn-body__line-item contetn-body__line-dateCreated">
                    ${date.toLocaleDateString()}
                </div>
                
                <div class="contetn-body__line-item contetn-body__line-category">
                    ${category}
                </div>
                
                <div class="contetn-body__line-item contetn-body__line-contet">
                    ${description}
                </div>
    
                    <div class="contetn-body__line-item contetn-body__line-btns">
                        <button data-id="${id}" class="btn-change">Change</button>
                        <button class="btn-archiver">Archiver</button>
                        <button data-id="${id}" class="btn-delate">Delate</button>
                    </div>
    
                </div>`;       
        });
    }

}
function createTodoHandler(event){
    try{
        
        const $el = event.target.closest('.add-btn');
        if(!$el) return

        const $form = event.target.closest('.form');
        event.preventDefault();



        const newObj =   {
            id: Date.now(), 
            title: $form.title.value, 
            description: $form.description.value, 
            category: $form.category.value, 
            status: STATUS.ACTIVE, 
            date: new Date()
        };


        this.todoRepository.create(newObj);
        this.render();

        $form.reset();
        
        
    }catch(error){
        alert("Vse huyovo " + error)
    }
}

function updateTodoHandler(event){ 
    try{
        const $el = event.target.closest('.btn-change');

        if(!$el) return

        const id = $el.dataset.id;

        this.todoRepository.update(id);

    }catch(error){
        console.log(error);
    }
}

function archivateTodoHandler(event){
    try{
        // const $el = event.target.closest('.add-btn');
    }catch(error){

    }
}

function unArchivateTodoHandler(event){
    try{
        
    }catch(error){

    }
}

function removeTodoHandler(event){
    try{
        const $el = event.target.closest('.btn-delate')
        if (!$el) return

        const id = $el.dataset.id
        this.todoRepository.remove(id)

        this.render()
    }catch(error){
        console.log(this.todos);
        alert("Vse huyovo " + error)
    }
}