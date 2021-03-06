import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component'
import {AppRoutingModule} from './app-routing/app-routing.module';
import { RutaAComponent } from './ruta-a/ruta-a.component';
import { RutaBComponent } from './ruta-b/ruta-b.component';
//Usamos el decorador 'NgModule' para que la clase
// decorada se comporte como un módulo.

@NgModule({
  //En el metadato 'declarations' indicamos todos aquellos
//componentes, pipes y directivas de mi aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent,
    RutaAComponent,
    RutaBComponent
  ],
  //En el metadato 'imports' indicamos todos aquellos
  //modulos de los cuales mi aplicación depende.
  //BrowserModule, es porque mi app es para la web y
  // ReactiveFormsModule para hacer formularos.
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  // En el metadato'providers' indicamos todos aquellos
  //proveedores de clase o valores que puedan ser inyectados.
  providers: [
    ContactosService 

  ],

  //componente raiz.
  bootstrap: [AppComponent]
})
export class AppModule { 

}
