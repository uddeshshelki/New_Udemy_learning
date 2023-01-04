import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome.component';


const routes: Routes = [
  // { path: "welcome/:name", component: WelcomeComponent },
  // { path: "menu", component: MenuComponent },
  { path: "welcome", component: WelcomeComponent, canActivate: [RouteGaurdService] },
  { path: "login", component: LoginComponent },
  { path: 'todos', component: ListToDoComponent, canActivate: [RouteGaurdService] },
  { path: "logout", component: LogoutComponent },
  {path: "updatetodos/:id", component: TodoComponent ,canActivate: [RouteGaurdService] },
  
  { path: "", component: LoginComponent },
  { path: "**", component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
