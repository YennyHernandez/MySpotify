import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  sendCredentials(email: string, password: string){
    console.log("enviando por servicio", email, password)
  }
}