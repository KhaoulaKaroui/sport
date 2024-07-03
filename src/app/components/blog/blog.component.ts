import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articlesTab: any =[
    { id: 1, title: "Romolu at Real Nadrid", date: "May 01, 2020", description: "Lorem ipsum dolor sit amet", img: "assets/images/img_1.jpg"},
    { id: 2, title: "Messi at Real Nadrid", date: "Mar 14, 2020", description: "Lorem ipsum dolor sit amet", img: "assets/images/img_2.jpg"},
    { id: 3, title: "Neymar at Real Nadrid", date: "Jul 20, 2020", description: "Lorem ipsum dolor sit amet", img: "assets/images/img_3.jpg"},
    { id: 4, title: "Romolu at Real Nadrid", date: "Dec 18, 2020", description: "Lorem ipsum dolor sit amet", img: "assets/images/img_1.jpg"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
