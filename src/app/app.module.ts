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

import { PhotoService } from './services/photo.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        SidePanelComponent,
        PhotoListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [PhotoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
