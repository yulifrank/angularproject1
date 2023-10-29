import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/shared/Contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  contactsList: Contact[] = [
    new Contact('tamar', 'address', 24, '11111111111', 'na@gmail.com', '../../assets/images/570119.webp'),
    new Contact('naahma', 'address', 22, '222222222', 'na@gmail.com', '../../assets/images/570428.webp'),
    new Contact('yael', 'address', 20, '3333333333', 'na@gmail.com', '../../assets/images/570212.webp'),
    new Contact('kobi', 'address', 18, '444444444', 'na@gmail.com', '../../assets/images/570309.webp'),
  ];
  arrName: string[] = [];

   addItem(x: string) {
    if(this.arrName.indexOf(x)<0)
    this.arrName.push(x)
  }
  deleteItem(name: string)
  {
    this.arrName = this.arrName.filter((item) => item !== name);

  }
  ngOnInit(): void {
  }

}
