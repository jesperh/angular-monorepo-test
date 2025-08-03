import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// importing the component from the library
import { Hero } from '@angular-monorepo-test/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hero],
  template: `
    <lib-hero
      title="Welcmoe demo"
      subtitle="Build something amazing today"
      cta="Get Started"
    ></lib-hero>
  `,
})
export class App {}
