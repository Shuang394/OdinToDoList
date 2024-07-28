import { format } from 'date-fns';

function toDoList(title, date, description, completed, importance){
    this.title = title;
    this.date = date;
    this.description = description;
    this.completed = completed;
    this.importance = importance;
}

function project(toDoList){
    this.toDoList = toDoList;
}

export {toDoList, project};