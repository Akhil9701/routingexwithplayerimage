import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ShowAllPlayersComponent } from './show-all-players/show-all-players.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';

var myRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },

  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'showAllPlayers', component: ShowAllPlayersComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'updatePlayer/:id', component: UpdatePlayerComponent }
]


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AddPlayerComponent,
    ShowAllPlayersComponent,

    LoginComponent,
    RegisterComponent,
    UpdatePlayerComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
