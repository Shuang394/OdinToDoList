import {toDoList, project} from './todoObj.js';

function toDoEventListener(event){
    event.preventDefault();

    let toDoTitle = document.querySelector("#toDoTitle").value;
    let toDoDescription = document.querySelector("#toDoDescription").value;
    let toDoDate = document.querySelector("#toDoDate").value;
    let toDoPriority;
    const radios = document.getElementsByName("priority");

    for (const radio of radios){
        if (radio.checked){
            toDoPriority = radio.value;
            break;
        }
    }

    let toDoObj = new toDoList(toDoTitle, toDoDate, toDoDescription, false, toDoPriority);
    
    if (localStorage.getItem(toDoObj.title) === null){
        localStorage.setItem(toDoObj.title, JSON.stringify(toDoObj));
    }
    else{
        console.log("Item already exists!");
    }

}

export {toDoEventListener};