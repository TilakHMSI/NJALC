import { Component, Directive, HostListener, ElementRef } from '@angular/core';

import { FormGroup, NgControl } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LINECALENDARMAINTENANCE.mg.controls.g";
import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";
import { MagicModalInterface } from "@magic-xpa/angular";


@Directive({
  selector: '[MMYYYY_V][mmYyyyMask]'
})
export class MmYyyyMaskDirective {
  constructor(
    private el: ElementRef<HTMLInputElement>,
    public ngControl: NgControl
  ) {}

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    let value = target.value.replace(/\D/g, ''); // Keep only digits
    
    if (value.length >= 6) value = value.substring(0, 6);
    
    if (value.length >= 2) {
      const month = value.substring(0, 2);
      const year = value.substring(2);
      value = `${month}-${year}`;
    }
    
    this.ngControl.control?.setValue(value, { emitEvent: false });
    target.value = value;
  }

  @HostListener('blur') onBlur() {
    const value = this.ngControl.control?.value;
    if (value && !/^\d{2}-\d{4}$/.test(value)) {
      this.ngControl.control?.setValue('');
    }
  }
}

@Component({
    selector: 'mga-VPRDO021_Line_Calendar_Maint_LINECALENDARMAINTENANCE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LINECALENDARMAINTENANCE.component.html'
})
export class LINECALENDARMAINTENANCE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LINECALENDARMAINTENANCE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return LINECALENDARMAINTENANCE.x;
    }
    Y() {
        return LINECALENDARMAINTENANCE.y;
    }
    Width(): string {
        return LINECALENDARMAINTENANCE.width;
    }
    Height(): string {
        return LINECALENDARMAINTENANCE.height;
    }
    IsCenteredToWindow() {
        return LINECALENDARMAINTENANCE.isCenteredToWindow;
    }
    FormName() {
        return LINECALENDARMAINTENANCE.formName;
    }
    ShowTitleBar() {
        return LINECALENDARMAINTENANCE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LINECALENDARMAINTENANCE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LINECALENDARMAINTENANCE.isResizable;
    }
    IsMovable() {
        return LINECALENDARMAINTENANCE.isMovable;
    }
}