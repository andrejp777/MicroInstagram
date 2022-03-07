import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() searchEvent= new EventEmitter<string>();
  searchText: string ="";
  constructor() { }

  ngOnInit(): void {
  }
  public search()
  {
    this.searchEvent.emit(this.searchText);
  }
}
