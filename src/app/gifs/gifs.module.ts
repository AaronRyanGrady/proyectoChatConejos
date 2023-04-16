import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPgeComponent } from './gifs-pge/gifs-pge.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPgeComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPgeComponent
  
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
