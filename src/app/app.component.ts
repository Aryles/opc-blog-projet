import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
 
  titlePosts = [
    {
      title: 'Mon premier post'
    },
    {
  title: 'Mon deuxieme post'
    },
  {
    title: 'Encore un post'
  
  }
  ];
  

}
