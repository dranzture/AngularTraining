import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IProduct from '../products/product';

@Component({
  selector: 'pm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  selectedItem: IProduct | undefined; 
  @Input() items: IProduct[] = [];
  @Output() changedProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }

  selectionChanged(): void{
    console.log(this.selectedItem);
    this.changedProduct.emit(this.selectedItem);
  }
}
