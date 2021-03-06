import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormularioreservasComponent } from './formularioreservas/formularioreservas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { InfohotelComponent } from './infohotel/infohotel.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    FormularioreservasComponent,
    ReservasComponent,
    InfohotelComponent,
    HabitacionesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
