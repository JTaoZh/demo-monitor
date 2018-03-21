import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yk',
  templateUrl: './yk.component.html',
  styleUrls: ['./yk.component.css']
})
export class YkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handle(index: string): void {
    console.log(index)
  }
}
