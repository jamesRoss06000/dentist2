import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = 43.701876;
  longitude: number = 7.255632;

  constructor() { }

  ngOnInit() {
  }

  onChoseLocation(event){
    console.log(event);
  }

}