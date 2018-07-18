import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';

const components = [
  SearchComponent
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class SearchModule { }
