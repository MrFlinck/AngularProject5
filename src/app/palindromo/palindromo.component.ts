import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  valor : string= "";
  letras: string[] = []
  letrasAoContrario: string[] = []
  resultado = ""

  numLetras: number = 0; 

  
  palindromo(){
    this.numLetras = this.valor.length;
    this.letras = this.valor.split('')
    console.log(this.letras)
    this.letrasAoContrario = this.letras.slice().reverse()


    console.log(this.letrasAoContrario)
    if(this.letras.join('') === this.letrasAoContrario.join('') ){
      this.resultado = 'true'
      console.log('jooj')




    }
    else{
      this.resultado = 'false'
      
    }
    
    
    

  
  }

}
