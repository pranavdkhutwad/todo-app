import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
 { path: 'todo', component: TodoComponent },
 { path: 'contact', component: ContactComponent },
 { path: '', redirectTo: "/todo", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
