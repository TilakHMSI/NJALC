import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./REPAIR_OUT_ENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-REPAIR_OUT_ENTRY_REPAIR_OUT_ENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './REPAIR_OUT_ENTRY.component.html'
})
export class REPAIR_OUT_ENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "REPAIR_OUT_ENTRY";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return REPAIR_OUT_ENTRY.x;
    }
    Y() {
        return REPAIR_OUT_ENTRY.y;
    }
    Width(): string {
        return REPAIR_OUT_ENTRY.width;
    }
    Height(): string {
        return REPAIR_OUT_ENTRY.height;
    }
    IsCenteredToWindow() {
        return REPAIR_OUT_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return REPAIR_OUT_ENTRY.formName;
    }
    ShowTitleBar() {
        return REPAIR_OUT_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return REPAIR_OUT_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return REPAIR_OUT_ENTRY.isResizable;
    }
    IsMovable() {
        return REPAIR_OUT_ENTRY.isMovable;
    }
}