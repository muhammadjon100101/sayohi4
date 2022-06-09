import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  picksBlock:any = [
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg',name:'Muhammadjon',byName:'Firus'}, 
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg',name:'Mustafojon',byName:'Farhod'}, 
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg',name:'Ahmad',byName:'Abdurahmon'}, 
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg',name:'Umar',byName:'Okil'}, 
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg',name:'Usmon',byName:'Mansur'}, 
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg',name:'Ali',byName:'Romiz'}, 
  ]


  constructor() { }

  ngOnInit(): void {
  }
  

}
