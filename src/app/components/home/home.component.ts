import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  m:any= { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: 'JUV', teamTwo:'ROM'}
  constructor() { }

  ngOnInit(): void {
  }

}
