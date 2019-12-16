import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {

  serviceText: boolean = false;
  contactData: boolean = false;
  aboutData: boolean = false;
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

  about() {
    this.aboutData = !this.aboutData;
  }

  map() {
    this.mapData = !this.mapData;
  }

  gotoDoctolib(): void {
    window.open("https://www.doctolib.fr/dentiste/nice/laura-ivan?utm_campaign=google-maps&utm_content=nice&utm_medium=organic&utm_source=google&utm_term=dentiste", "_blank");
  }
}