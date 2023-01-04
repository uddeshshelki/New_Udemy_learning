import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


export class helloBeanExample
{
  constructor(public message : string)
  {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http:HttpClient
  ) { }


  executeWelcomebean()
  {
    // console.log("Execute welcome bean")
    return this.http.get<helloBeanExample>('http://localhost:8080/hello/aadil');
  }

  executeWelcomePathVariable(name:string)
  {
    // console.log("Execute welcome bean")
    return this.http.get<helloBeanExample>(`http://localhost:8080/hello/${name}`);
  }
}
