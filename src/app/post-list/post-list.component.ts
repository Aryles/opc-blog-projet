import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() titlePost:string;

  lastUpdate=new Date();
nombre = 0 ; 
  love(){
    this.nombre= this.nombre+1;
    console.log(this.nombre);
  }
dontLove(){
  this.nombre= this.nombre-1;
  console.log(this.nombre);

}

getColor(){
  if(this.nombre ==0){
    return 
  } else if (this.nombre>0){
    return 'green';
  } else if (this.nombre<0){
    return 'red';
  }

}

  constructor() { }

  ngOnInit() {
  }

}
