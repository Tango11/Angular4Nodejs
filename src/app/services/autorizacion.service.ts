import {Injectable} from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
@Injectable({
      providedIn: 'root'
   })
export class AutorizacionService {
	constructor (private angularFireAuth: AngularFireAuth, private router: Router){
		this.isLogged();
	}
	public facebookLogin(){
		this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
		.then((result)=>{
			console.log(result);
			alert('usuario loggeado con facebook');
			this.router.navigate(['lugares']);
		})
		.catch((error)=>{
			console.log(error);
		})
	}
	public login= (email, password) => {
		this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
		.then((response)=>{
			alert('Usuario Loggeado con Exito');
			this.router.navigate(['lugares']);
		})
		.catch((error)=>{
			alert('un error ha ocurrido');
			console.log(error);
		})
	}
	public registro= (email, password) => {
		this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
		.then((response)=>{
			alert('Usuario Registrado con Exito');
		})
		.catch((error)=>{
			alert('un error ha ocurrido');
			console.log(error);
		})
	}
	public isLogged(){
			return this.angularFireAuth.authState;
	}
	public logout(){
		this.angularFireAuth.auth.signOut();
		alert('Sesion Cerrada');
		this.router.navigate(['lugares']);
	}
}