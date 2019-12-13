import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {

  serviceText: boolean = false;
  contactData: boolean = false;
  galleryData: boolean = false;
  mapData: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  services() {
    this.serviceText = !this.serviceText;
  }

  contact() {
    this.contactData = !this.contactData;
  }

  gallery() {
    this.galleryData = !this.galleryData;
  }

  map() {
    this.mapData = !this.mapData;
  }
}