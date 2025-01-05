import { Component } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  imports: [],
  templateUrl: './testcomp.component.html',
  styleUrl: './testcomp.component.css'
})
export class TestcompComponent {

  clickMe(){
    window.alert("working fine")
  }
}
