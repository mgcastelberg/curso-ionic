import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = Array();

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ) {
    console.log('Evento');

    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500);
  }

}
