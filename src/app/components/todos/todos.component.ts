import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.sass"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  deleteTodo(todo: Todo) {
    console.log("delete");
  }
}
