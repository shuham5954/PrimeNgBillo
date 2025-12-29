import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

import { OnInit } from '@angular/core';
import { Table } from 'primeng/table';
// import { Customer, Representative } from '@/domain/customer';
// import { CustomerService } from '@/service/customerservice';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    TabsModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Billo');

  onClick() {
    console.log('PrimeNG primary button clicked');
  }

  onClick2() {
    console.log('PrimeNG secondary directive button clicked');
  }
}
