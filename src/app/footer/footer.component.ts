import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gotoJamesRoss(): void {
    window.open("https://www.jamesross.tech", "_blank");
  }

  gotoIcons(): void {
    window.open("https://www.flaticon.com/authors/icongeek26", "_blank");
  }


}
