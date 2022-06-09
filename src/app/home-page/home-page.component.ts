import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  picksBlock:any = [
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Muhamamdjon',byName:'Abubakr'},
    {id:2,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Mustafojon',byName:'Abubakr'},
    {id:3,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Umar',byName:'Abubakr'},
    {id:4,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Usmon',byName:'Abubakr'},
    {id:5,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Ali',byName:'Abubakr'},
    {id:6,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Ahmad',byName:'Abubakr'},
  ]

  constructor() { }

  ngOnInit(): void {
  }
 
}
