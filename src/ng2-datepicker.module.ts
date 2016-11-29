import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Ng2DatePicker}          from "./ng2-datepicker.component";
import {InputFocusDirective}    from "./directives/ng2-datepicker.input.directive";

@NgModule({
    declarations: [Ng2DatePicker, InputFocusDirective],
    imports: [CommonModule],
    exports: [Ng2DatePicker, InputFocusDirective]
})
export class Ng2DatePickerModule {
}
