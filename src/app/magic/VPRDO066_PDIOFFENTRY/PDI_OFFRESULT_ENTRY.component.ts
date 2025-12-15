import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PDI_OFFRESULT_ENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO066_PDIOFFENTRY_PDI_OFFRESULT_ENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PDI_OFFRESULT_ENTRY.component.html'
})
export class PDI_OFFRESULT_ENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PDI OFF RESULT ENTRY <>4";
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
        return PDI_OFFRESULT_ENTRY.x;
    }
    Y() {
        return PDI_OFFRESULT_ENTRY.y;
    }
    Width(): string {
        return PDI_OFFRESULT_ENTRY.width;
    }
    Height(): string {
        return PDI_OFFRESULT_ENTRY.height;
    }
    IsCenteredToWindow() {
        return PDI_OFFRESULT_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return PDI_OFFRESULT_ENTRY.formName;
    }
    ShowTitleBar() {
        return PDI_OFFRESULT_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PDI_OFFRESULT_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PDI_OFFRESULT_ENTRY.isResizable;
    }
    IsMovable() {
        return PDI_OFFRESULT_ENTRY.isMovable;
    }
    selectText(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.value) {
    input.select();
  }
}

}