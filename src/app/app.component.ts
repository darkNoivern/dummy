import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { zip } from 'rxjs';
// import { TLSSocket } from 'tls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-app';

  addX(){
    let take = prompt("Give task " , "Sleep");
    console.log(take);
  }

  myEvent(eve: any){
    console.warn("this is " + eve);
  }

  container = "";

  // addNew(eve: any){
  //   // console.warn("this is " + eve);
  //   console.log(eve.target.value);
  //   this.container = eve.target.value;
  // }

  newList = [
    {
      id : Math.floor(Math.random() * (1000 + 1)),
      name : "talk to him",
      state : true
    },
    {    
      id : Math.floor(Math.random() * (1000 + 1)),
      name : "talk to her",
      state : true
    },
    {
      id : Math.floor(Math.random() * (1000 + 1)),
      name : "cook",
      state : true
    },
    {
      id : Math.floor(Math.random() * (1000 + 1)),
      name : "drink",
      state : true
    },
    {
      id : Math.floor(Math.random() * (1000 + 1)),
      name : "take medicine",
      state : true
    }];

  addNew(eve: any){
    // console.warn("this is " + eve);
    console.log(eve);
    this.container = eve;
    let newid = Math.floor(Math.random() * (1000 + 1));
    this.newList.push({id: newid, name: this.container, state : true});
    // document.getElementById('z').setValue
  }

  delit(delid: any){
    
    for (let index = 0; index < this.newList.length; index++) {
       if(delid==this.newList[index].id){
        this.newList.splice(index,1);
       }
    }
  }

  tf = true;

  color = "gold";

  // arr = ['dog','cat','rat','noice','cyan','black']

  arr = [
    {
      name : 'anil',
      age  : '25'
    },
    {
      name : 'anil',
      age  : '25'
    },
    {
      name : 'anil',
      age  : '25'
    }
  ]

  getVal(val: any){
    console.log(val);
  }

  colour = 'gold';

  updateCol(){
    this.colour = 'grey';
  }

  err = true;

  // updateD(){
  //   this.err = false;
  // }

  //  you can also do this toggling one 
  updateD(){
    this.err=!this.err;
  }

  data = 'bruce';

  nme = "spider Wales";

  nowDate = Date.now();

  strng = "Snorlax Sleeps";

  money = 200;

  onSubmit(val: any){
    console.log(val);
  }

  onSub(vals : any){
    console.log(vals);
  }
}
