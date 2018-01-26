import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // setting up properties
  name:string;
  age:number;
  email: string;
  posts:Post[];
  isEdit:boolean = false;
  //setting an object type
  address:{
    street:string,
    city:string,
    state: string
  }
  //using the interface we created
  person:Person;

  // setting up arrays
  hobbies:string[];

  onClick(){
    this.name = 'Dinusha dulanjalee';
    this.hobbies.push('new hobby');
  } 

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return true;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0; i< this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  constructor(private dataService:DataService) { 
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnIt ran...');
    this.name = 'Thilini Poornima';
    this.age = 30;
    this.email = 'test@test.com'
    this.address = {
      street:'16 th SW',
      city: 'Middletown',
      state:'MA'
    }
    this.hobbies = ['wtrite code', 'listen to music', 'watch anime']; 
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
      
    })

  }

}

//creating an interface adress2 
// you can put this inside anothet file, inside modules folder and import it
interface Person {
  name:string,
  age:number,
  ocuupation:string
}

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}
