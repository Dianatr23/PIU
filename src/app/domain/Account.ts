import {User} from "./User";

export class Account {
  constructor(nume: string, prenume: string, email: string, telefon: string, zona1: string, zona2: string,
              parola: string, notificari: boolean) {
    this.nume = nume;
    this.prenume = prenume;
    this.email = email;
    this.telefon = telefon;
    this.zona1 = zona1;
    this.zona2 = zona2;
    this.parola = parola;
    this.notificari = notificari;
    this.user = new User(email, telefon, parola);
  }

  nume: string;
  prenume: string;
  email: string;
  telefon: string;
  zona1: string;
  zona2: string;
  parola: string;
  notificari: boolean;
  user: User;
}
