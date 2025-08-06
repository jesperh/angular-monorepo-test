import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '@angular-monorepo-test/ui';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ...MATERIAL_MODULES],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  onClick() {
    alert('Addd button clicked');
  }
}
