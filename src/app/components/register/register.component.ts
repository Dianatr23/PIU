import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  zona1 = '';
  zona2 = '';
  zone = ['Baciu', 'Buna Ziua', 'Dambul Rotund', 'Europa', 'Gheorgheni', 'Grigorescu', 'Intre Lacuri', 'Manastur',
          'Marasti', 'Zorilor'];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectChangeHandler1(event: any): void {
    this.zona1 = event.target.value;
  }

  selectChangeHandler2(event: any): void {
    this.zona2 = event.target.value;
  }

}
