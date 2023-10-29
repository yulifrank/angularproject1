import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/shared/Contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{

  @Input() item !: Contact; 
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
