import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  examples = [
    { link: 'blog' , label: 'To-Do List'},
    { link: 'd3' , label: 'D3 Network Viz'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
