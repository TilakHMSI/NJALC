import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB024Re_PrintMENU209.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB024Re_PrintMENU209_VPRDB024Re_PrintMENU209',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB024Re_PrintMENU209.component.html'
})
export class VPRDB024Re_PrintMENU209 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB024Re_PrintMENU209";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB024Re_PrintMENU209.x;
    }
    Y() {
        return VPRDB024Re_PrintMENU209.y;
    }
    Width(): string {
        return VPRDB024Re_PrintMENU209.width;
    }
    Height(): string {
        return VPRDB024Re_PrintMENU209.height;
    }
    IsCenteredToWindow() {
        return VPRDB024Re_PrintMENU209.isCenteredToWindow;
    }
    FormName() {
        return VPRDB024Re_PrintMENU209.formName;
    }
    ShowTitleBar() {
        return VPRDB024Re_PrintMENU209.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB024Re_PrintMENU209.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB024Re_PrintMENU209.isResizable;
    }
    IsMovable() {
        return VPRDB024Re_PrintMENU209.isMovable;
    }
}