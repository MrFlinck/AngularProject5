import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  valor : string= "";
  numLetras: number = 0; 
  
  palindromo(){
    this.numLetras = this.valor.length;
  
  }

}
