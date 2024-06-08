
import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<number>=new EventEmitter();

  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }]

  // onDelete(index:number){
  //   console.log('pepe')
  //   this.onNewCharacter.emit(index);
  // }


  onDeleteCharacter(index:number):void{
//TODO emitir el ID del personaje
  console.log({index})
  this.onDelete.emit(index);
  }
 }
