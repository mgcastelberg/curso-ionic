import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  marvel: string[] = ['Antman', 'Spiderman', 'Starlord', 'Ironman', 'Hulk'];
  activar=true;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){
    console.log(event);
    //El 1 indica cuantos elementos quieres cortar
    const itemMover =this.personajes.splice( event.detail.from, 1 )[0];
    this.personajes.splice( event.detail.to, 0, itemMover );

    event.detail.complete();

    console.log(this.personajes);
  }
  doReorder2( event: any ){
    console.log(event);
    //El 1 indica cuantos elementos quieres cortar
    const itemMover =this.marvel.splice( event.detail.from, 1 )[0];
    this.marvel.splice( event.detail.to, 0, itemMover );

    event.detail.complete();

    console.log(this.marvel);
  }

  onClick(){
    this.activar = !this.activar;
  }

}
