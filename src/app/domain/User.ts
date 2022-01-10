export class User {
  constructor(email: string, telefon: string, parola: string) {
    this.email = email;
    this.telefon = telefon;
    this.parola = parola;
    this.project1 = false;
    this.project2 = false;
    this.project3 = false;
  }

  email: string;
  telefon: string;
  parola: string;
  project1: boolean;
  project2: boolean;
  project3: boolean;
}
