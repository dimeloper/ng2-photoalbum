import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { Photo } from '../models/photo';

@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.component.html'
})

export class PhotoListComponent {
    photos: Photo[];
    selectedPhoto: Photo;

    constructor(private photoService: PhotoService,
        private loginService: LoginService, private router: Router) {
        this.photoService.getPhotos().subscribe(
            data => console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
            error => console.log(error)
        )
    }

    onSelect(photo: Photo) {
        this.selectedPhoto = photo;
        if (this.loginService.checkLogin()) {
            this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
        } else {
          alert("You have to login first.");
        }

    }
}
