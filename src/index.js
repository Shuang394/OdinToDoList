import './style.css';
import {toDoList, project} from './todoObj';
import { toDoEventListener } from './formLogic';
import { modalTab, homeTab } from './tabLogic';

let openModal = document.querySelector('.openModal');
let closeModal = document.querySelector('.closeModal');
let modal = document.querySelector('.modal');


openModal.addEventListener('click', () => {
    //create new div for project with a button to add todo items
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

//create navigation for the modal tabs
modalTab();

let toDoForm = document.querySelector("#toDoForm");
toDoForm.addEventListener('submit', toDoEventListener);