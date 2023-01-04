import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-to-do/list-to-do.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  id: number
  todo: Todo
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, '', false, '');

    if (this.id != -1) {
      this.todoService.retreiveTodo(this.id).subscribe(
        data => this.todo = data
      )
    }
  }


  saveUpdate() {
    if (this.id == -1) {
      //create todo
      this.todoService.createTodo(this.todo).subscribe
        (
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    }
    else {
      this.todoService.updateTodo(this.id, this.todo).subscribe(

        update => {
          console.log(update)


          this.router.navigate(['todos'])
        }
      )
    }
  }

}
