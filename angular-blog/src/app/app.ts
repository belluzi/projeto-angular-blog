import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { MenuTitle } from './components/menu-title/menu-title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuTitle, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-blog');
}
