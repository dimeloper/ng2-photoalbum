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
import { AddPhotoComponent } from './components/add-photo.component';
import { PhotoDetailComponent } from './components/photo-detail.component';
import { PhotoCommentsComponent } from './components/photo-comments.component';
import { PhotoRowComponent } from './components/photo-row.component';

import { PhotoService } from './services/photo.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { UploadPhotoService } from './services/upload-photo.service';
import { AddPhotoService } from './services/add-photo.service';
import { CommentService } from './services/comment.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        SidePanelComponent,
        PhotoListComponent,
        RegisterComponent,
        LoginComponent,
        MyAlbumComponent,
        AddPhotoComponent,
        PhotoDetailComponent,
        PhotoCommentsComponent,
        PhotoRowComponent
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
        UserService,
        UploadPhotoService,
        AddPhotoService,
        CommentService
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
