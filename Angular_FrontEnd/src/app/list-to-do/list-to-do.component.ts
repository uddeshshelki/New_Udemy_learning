import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  message=''

  constructor(
    private dataService: TodoDataService,
    private router:Router
  ) { }
  todos = []
  // todos = [
  //   new Todo(1,'coding',false,new Date()),
  //   new Todo(2,'nil',false,new Date()),
  //   new Todo(3,'open to learn',false,new Date()),
  //   // { id: 1, description: 'coding' },
  //   // { id: 2, description: 'Nil' },
  //   // { id: 3, description: 'open to learn' }
  // ]
  //structure
  //  todo={
  //    id:1,
  //   description:'coding'
  //  }

  ngOnInit() {
    this.dataService.gettodoList().subscribe(
      // responses => this.todos = responses
      backendResponse => {
        console.log(backendResponse)
        this.todos = backendResponse
      }
    )

    this.refreshTodos();
  }

  refreshTodos()
  {
    this.dataService.gettodoList().subscribe(
      // responses => this.todos = responses
      backendResponse => {
        console.log(backendResponse)
        this.todos = backendResponse
      }
    )
 }

  // insertIntoTodo(responses)
  // {
  //   this.todos = responses
  // }

  deleteById(id)
  {
    console.log(`deleted ${id}`)
    this.dataService.deleteToById(id).subscribe(
      response =>
      {
         console.log(response);
        this.message = `Success deleted ${id} Todos`
        this.refreshTodos();
      }

    ) 
  }


  UpdateById(id)
  {
    console.log("Updated id "+id)
    this.router.navigate(['updatetodos',id])
  }
  
  Save()
  {
    console.log("Hello")
    this.router.navigate(['updatetodos',-1])
  }

}






export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    // public targetDate: Date
    public username: string

  ) {

  }
}



