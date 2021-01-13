import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  coordinate: any;
  coordinateX: number = 361;
  coordMouseDown: number;
  coordMouseUp: number;

  constructor() { }

  ngOnInit(): void {

  }

  dragEvent(event: MouseEvent) {
    if (event.clientX % 5 == 0 && event.clientX > 50) {
      this.coordinateX = event.clientX - 261;
      console.log("Drag => ", this.coordinateX);
    }
  }
}
