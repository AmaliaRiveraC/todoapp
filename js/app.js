
var account = 0;
var textArea = document.getElementById('message');
var button = document.getElementById('submit-button');
var tasksContainer = document.getElementById('tasks');


var throughTask = function() {
    var checked = this.checked;
    
    var text = this.nextSibling;

    if (checked) {
        text.style.textDecoration = 'line-through';
    } else {
        text.style.textDecoration = 'none';
    }
}; 


var remove = function(e) {
    e.preventDefault();
    //this.parentElement.remove();
    this.parentNode.remove();
};

var taskAdd = function(event) {
    event.preventDefault();
    
    //Creamos elementos segun arquitectura previamente diseñada en HTML
    var article = document.createElement('article');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var removeButton = document.createElement('button');

    //Agregamos atributos a los elementos creados
    checkbox.type = 'checkbox';
    //checkbox.setAttribute('type', 'checkbox');
    /*checkbox.id = 'check' + account;*/
    checkbox.addEventListener('click', throughTask);

    /*label.setAttribute('for', checkbox.id);*/
    label.innerHTML = textArea.value;

    removeButton.type = 'text';
    removeButton.innerText = 'x';
    removeButton.addEventListener('click', remove);
    

    //Agregar los elementos creados a elementos existentes en HTML y a definir su parentesco
    article.appendChild(checkbox);
    article.appendChild(label);
    article.appendChild(removeButton);

    tasksContainer.appendChild(article);

    //account++;
    textArea.value = " ";
};

button.addEventListener('click', taskAdd);








