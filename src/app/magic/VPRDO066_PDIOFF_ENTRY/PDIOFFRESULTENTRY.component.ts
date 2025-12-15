import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PDIOFFRESULTENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO066_PDIOFF_ENTRY_PDIOFFRESULTENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PDIOFFRESULTENTRY.component.html'
})
export class PDIOFFRESULTENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PDI OFF RESULT ENTRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PDIOFFRESULTENTRY.x;
    }
    Y() {
        return PDIOFFRESULTENTRY.y;
    }
    Width(): string {
        return PDIOFFRESULTENTRY.width;
    }
    Height(): string {
        return PDIOFFRESULTENTRY.height;
    }
    IsCenteredToWindow() {
        return PDIOFFRESULTENTRY.isCenteredToWindow;
    }
    FormName() {
        return PDIOFFRESULTENTRY.formName;
    }
    ShowTitleBar() {
        return PDIOFFRESULTENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PDIOFFRESULTENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PDIOFFRESULTENTRY.isResizable;
    }
    IsMovable() {
        return PDIOFFRESULTENTRY.isMovable;
    }
       selectText(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.value) {
    input.select();
  }
}
}