import {Component} from '@angular/core';
import {TrajetService} from "../../service/trajet.service";
import {Trajet} from "../../model/Trajet";

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel.component.css'],
    templateUrl: './carousel.component.html'
})

export class CarouselComponent {
    constructor(private trajetService: TrajetService) {
    }

    public slides: Trajet[] = [
        {
            nbpersonnes: 2,
            isOffer: true,
            dateDepart: new Date('12/14/2022'),
            price: 30,
            profile: {
                age: 20,
                Name: 'alia belaid',
                gender: false,
                phoneNumber: 25481212
            },
            depart: 'gabes',
            destination: 'tunis'
        },
        {
            nbpersonnes: 3,
            isOffer: true,
            dateDepart: new Date('12/14/2022'),
            price: 10,
            profile: {
                age: 20,
                Name: 'hammadi el aguerbi',
                gender: true,
                phoneNumber: 25481212
            },
            depart: 'tunis',
            destination: 'sousse'
        },
        {
            nbpersonnes: 1,
            isOffer: true,
            dateDepart: new Date('12/14/2022'),
            price: 15,
            profile: {
                age: 20,
                Name: 'alia belaid',
                gender: false,
                phoneNumber: 25481212
            },
            depart: 'sfax',
            destination: 'tunis'
        }

    ];

    ngOnInit(): void {
        this.trajetService.getOffres().subscribe((offres) => this.slides = offres);
    }
}
