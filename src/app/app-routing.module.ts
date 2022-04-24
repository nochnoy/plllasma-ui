import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AppGuard} from "./app.guard";
import {ForumPageComponent} from "./pages/forum-page/forum-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/forum/1', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'forum/:id', component: ForumPageComponent, canActivate: [AppGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
