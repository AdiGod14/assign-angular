import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisualsComponent } from './components/visuals/visuals.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, VisualsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aditya Gode\'s Angular';
}
