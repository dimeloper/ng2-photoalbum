import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NavBarComponent } from './components/nav-bar.component';
import { SidePanelComponent } from './components/side-panel.component';
import { PhotoListComponent } from './components/photo-list.component';
import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';
import { MyAlbumComponent } from './components/my-album.component';

import { PhotoService } from './services/photo.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        SidePanelComponent,
        PhotoListComponent,
        RegisterComponent,
        LoginComponent,
        MyAlbumComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        PhotoService,
        RegisterService,
        LoginService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
