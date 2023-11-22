import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { DropdownComponent } from './dropdown.component';
import { CustomUppercasePipe } from './custom-uppercase.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe,
    DropdownComponent,
    CustomUppercasePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
    StarComponent,
    DropdownComponent,
    CustomUppercasePipe
  ]
})
export class SharedModule { }
