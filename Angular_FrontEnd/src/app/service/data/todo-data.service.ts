import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-to-do/list-to-do.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  gettodoList()
  {
    let basicAuthHeader= this.createBasicAuthHttpHeader();
    let header = new HttpHeaders(
      {
        Authorization : basicAuthHeader
      }
    )


    // console.log("Execute welcome bean")
    return this.http.get<Todo[]>('http://localhost:8080/gettodosstatic',{
      headers:header
    })
  }

  deleteToById(id)
  {
    return this.http.delete(`http://localhost:8080/deletetodosStatic/${id}`)
    
  }

  retreiveTodo(id)
  {
    return this.http.get<Todo>(`http://localhost:8080/gettodosstatic/${id}`)
  }

  updateTodo(id, todo:Todo)
  {
    return this.http.put(`http://localhost:8080/updateTodoStatic/${id}`,todo)
  }

  createTodo(todo:Todo)
  {
    return this.http.post(`http://localhost:8080/createNew`,todo)
  }



  createBasicAuthHttpHeader(){
  
    let username="user"
    let password="pass@12"
    let basicAuthHeaderString = 'Basic'  + window.btoa(username + ':' + password);

    return basicAuthHeaderString;
  }
}
