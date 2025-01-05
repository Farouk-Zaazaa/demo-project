import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestcompComponent } from "./testcomp/testcomp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testProj';
}
