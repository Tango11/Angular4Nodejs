import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks-directive";
import {Routes, RouterModule} from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LugaresService} from "./services/lugares.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent} from './crear/crear.component';
import {HttpModule} from '@angular/http';
import {LinkifystrPipe} from './pipes/linkifystr.pipe';
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {AutorizacionService} from "./services/autorizacion.service";
import {MyGuard} from "./services/guardia.service";

const appRoutes: Routes = [
	{path: '', component: LugaresComponent},
	{path: 'lugares',component: LugaresComponent},
	{path: 'detalle/:id',component: DetalleComponent},
	{path: 'contacto',component: ContactoComponent},
	{path: 'crear/:id',component: CrearComponent, canActivate:[MyGuard]},
	{path: 'login',component: LoginComponent},
	{path: 'registro',component: RegistroComponent},
];
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""

}; 
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfJTVKnpLl0ULuuwDuix-9ANpyQhP6mfc'
    }),
     RouterModule.forRoot(appRoutes,{enableTracing: true}),
     HttpModule,

  
  ],
  providers: [LugaresService,AutorizacionService,MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
