import './style.css';
import {toDoList, project} from './todoObj';
// let content = document.querySelector('.content');

// content.addEventListener('DOMContentLoaded', () => {
//     //if local storage is empty

//     //if local storage has something


// })

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

//modalSidebar
let sideBar = document.querySelector(".modalSidebar");
let sidePara = sideBar.querySelectorAll("p");

sidePara.forEach(para => {
    para.addEventListener('click', () =>{
        sidePara.forEach(className => {
            className.classList.remove("active");
        })
        para.classList.add("active");
    })
})