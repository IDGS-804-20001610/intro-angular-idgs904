import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Se agregan las referencias del componente
import { schoolComponent } from './school/school.component';
import { ievnComponent } from './school/ievn.component';
import { IricComponent } from './school/iric/iric.component';
import { MenuComponent } from './school/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './school/forms/add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './school/forms/operas/operas.module';
import { AlumnosFilterPipe } from './school/alumnos-filter.pipe';
import { CalificacionAlumComponent } from './school/calificacion-alum/calificacion-alum.component';

@NgModule({
  declarations: [
    //Declaración del componente que creamos
    AppComponent,
    schoolComponent,
    ievnComponent,
    IricComponent,
    MenuComponent,
    AddComponent,
    AlumnosFilterPipe,
    CalificacionAlumComponent,
  ],
  imports: [
    BrowserModule,
    //Importamos
    FormsModule,
    BrowserAnimationsModule,
    //Módulos
    OperasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
