export class User {
  constructor(email: string, telefon: string, parola: string) {
    this.email = email;
    this.telefon = telefon;
    this.parola = parola;
  }

  email: string;
  telefon: string;
  parola: string;
}
