import { Component } from '@angular/core';


@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent{
  
  public valorStake: number;
  public odd01: number;
  public odd02: number;
  public odd03: number;   
  public odd04: number;
  public odd05: number;
  public odd06: number;
  public lucro: number;
  public probabilidade01: number;
  public probabilidade02: number;
  public probabilidade03: number;
  public probabilidade04: number;
  public probabilidade05: number;
  public probabilidade06: number;
  public pI: number;
  public dut01: number;
  public dut02: number;
  public dut03: number;
  public dut04: number;
  public dut05: number;
  public dut06: number;
  public entradaOdd01: number;
  public entradaOdd02: number;
  public entradaOdd03: number;
  public entradaOdd04: number;
  public entradaOdd05: number;
  public entradaOdd06: number;

  
  
  click3 = false;
  click4 = false;
  click5 = false;
  click6 = false;
  clickResult = false;

 

  constructor( ) { }

  calcular() {
    alert("Esse retorno ja esta sendo somado com seu investimento!");

  let valorStake= this.valorStake;
  let odd01= this.odd01;
  let odd02= this.odd02;
  let odd03= this.odd03;   
  let odd04= this.odd04;
  let odd05= this.odd05;
  let odd06= this.odd06;
  let lucro= 0;
  let probabilidade01= 0;
  let probabilidade02= 0;
  let probabilidade03= 0;
  let probabilidade04= 0;
  let probabilidade05= 0;
  let probabilidade06= 0;
  let pI= 0;
  let dut01= 0;
  let dut02= 0;
  let dut03= 0;
  let dut04= 0;
  let dut05= 0;
  let dut06= 0;
  let entradaOdd01= 0;
  let entradaOdd02= 0;
  let entradaOdd03= 0;
  let entradaOdd04= 0;
  let entradaOdd05= 0;
  let entradaOdd06= 0;




    this.probabilidade01 = 1 / this.odd01;
    this.probabilidade02 = 1 / this.odd02;
    if( this.odd03 > 0){
    this.probabilidade03 = 1 / this.odd03;
    if( this.odd04 > 0){
    this.probabilidade04 = 1 / this.odd04;
    if( this.odd05 > 0){
    this.probabilidade05 = 1 / this.odd05;
    if( this.odd06 > 0){
    this.probabilidade06 = 1 / this.odd06;
            }
          }
        }
      }

      
    this.pI = this.probabilidade01 + this.probabilidade02;
      if( this.odd03 > 0){ 
        this.pI = this.probabilidade01 + this.probabilidade02 + this.probabilidade03;
      if( this.odd04 > 0){
        this.pI = this.probabilidade01 + this.probabilidade02 + this.probabilidade03 + this.probabilidade04;
      if( this.odd05 > 0){
        this.pI = this.probabilidade01 + this.probabilidade02 + this.probabilidade03 + this.probabilidade04 + this.probabilidade05; 
      if( this.odd06 > 0){
        this.pI = this.probabilidade01 + this.probabilidade02 + this.probabilidade03 + this.probabilidade04 + this.probabilidade05 + this.probabilidade06;
      }
    }
  }
}

    this.dut01 = ((1 / this.odd01) / this.pI)  * 100;
    this.dut02 = ((1 / this.odd02) / this.pI)  * 100;
    if( this.odd03 > 0){
      this.dut03 = ((1 / this.odd03) / this.pI)  * 100;
    if( this.odd04 > 0){
      this.dut04 = ((1 / this.odd04) / this.pI)  * 100;
    if( this.odd05 > 0){
      this.dut05 = ((1 / this.odd05) / this.pI)  * 100;
    if( this.odd06 > 0){
      this.dut06 = ((1 / this.odd06) / this.pI)  * 100; 
      }
    }
  }
}


    this.entradaOdd01 = (this.dut01 / 100 ) * valorStake;
    this.entradaOdd02 = (this.dut02 / 100 ) * valorStake;
    if( this.odd03 > 0){
      this.entradaOdd03 = (this.dut03 / 100 ) * valorStake;
    if( this.odd04 > 0){
      this.entradaOdd04 = (this.dut04 / 100 ) * valorStake;
    if( this.odd05 > 0){
      this.entradaOdd05 = (this.dut05 / 100 ) * valorStake;
    if( this.odd06 > 0){
      this.entradaOdd06 = (this.dut06 / 100 ) * valorStake;
      }
    }
  }
}

    this.lucro = this.entradaOdd01 * this.odd01;

   this.clickResult = true;
   

  
  }

  limpar(){
   window.localStorage.clear();
   window.location.reload();
  }
  

}
