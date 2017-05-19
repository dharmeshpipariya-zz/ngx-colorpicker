import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextDirective, SliderDirective } from './helpers';

import { ColorPickerService } from './colorpicker.service';
import { ColorPickerComponent } from './colorpicker.component';
import { ColorPickerDirective } from './colorpicker.directive';

@NgModule({
  imports: [ CommonModule ],
  providers: [ ColorPickerService ],
  declarations: [ ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective ],
  exports: [ ColorPickerDirective ],
  entryComponents: [ ColorPickerComponent ]
})
export class ColorPickerModule {}
