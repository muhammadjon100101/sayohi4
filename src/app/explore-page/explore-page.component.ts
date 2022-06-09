import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit { 
   clrTech = 0
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
