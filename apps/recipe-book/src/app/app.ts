import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayout } from '@angular-monorepo-test/ui';

@Component({
  imports: [RouterModule, AppLayout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'recipe-book';
}
