import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit { 
  exploreBlock:any = [
    {id:1,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Muhamamdjon',byName:'Okil'},
    {id:2,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Mustafojon',byName:'Okil'},
    {id:3,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Umar',byName:'Okil'},
    {id:4,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Usmon',byName:'Okil'},
    {id:5,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Ali',byName:'Okil'},
    {id:6,img:'./assets/img/person2.svg',avatar:'./assets/img/avatarPerson.svg', name:'Ahmad',byName:'Okil'},
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
