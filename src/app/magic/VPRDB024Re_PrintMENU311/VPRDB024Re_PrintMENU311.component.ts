import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB024Re_PrintMENU311.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB024Re_PrintMENU311_VPRDB024Re_PrintMENU311',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB024Re_PrintMENU311.component.html'
})
export class VPRDB024Re_PrintMENU311 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB024Re_PrintMENU311";
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
        return VPRDB024Re_PrintMENU311.x;
    }
    Y() {
        return VPRDB024Re_PrintMENU311.y;
    }
    Width(): string {
        return VPRDB024Re_PrintMENU311.width;
    }
    Height(): string {
        return VPRDB024Re_PrintMENU311.height;
    }
    IsCenteredToWindow() {
        return VPRDB024Re_PrintMENU311.isCenteredToWindow;
    }
    FormName() {
        return VPRDB024Re_PrintMENU311.formName;
    }
    ShowTitleBar() {
        return VPRDB024Re_PrintMENU311.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB024Re_PrintMENU311.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB024Re_PrintMENU311.isResizable;
    }
    IsMovable() {
        return VPRDB024Re_PrintMENU311.isMovable;
    }
}