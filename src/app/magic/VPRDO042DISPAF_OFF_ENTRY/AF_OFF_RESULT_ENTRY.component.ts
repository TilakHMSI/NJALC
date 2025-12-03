import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AF_OFF_RESULT_ENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO042DISPAF_OFF_ENTRY_AF_OFF_RESULT_ENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AF_OFF_RESULT_ENTRY.component.html'
})
export class AF_OFF_RESULT_ENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AF-OFF RESULT ENTRY";
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
        return AF_OFF_RESULT_ENTRY.x;
    }
    Y() {
        return AF_OFF_RESULT_ENTRY.y;
    }
    Width(): string {
        return AF_OFF_RESULT_ENTRY.width;
    }
    Height(): string {
        return AF_OFF_RESULT_ENTRY.height;
    }
    IsCenteredToWindow() {
        return AF_OFF_RESULT_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return AF_OFF_RESULT_ENTRY.formName;
    }
    ShowTitleBar() {
        return AF_OFF_RESULT_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AF_OFF_RESULT_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AF_OFF_RESULT_ENTRY.isResizable;
    }
    IsMovable() {
        return AF_OFF_RESULT_ENTRY.isMovable;
    }
}