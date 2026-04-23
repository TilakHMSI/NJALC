import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB024_RePrintMENU_164.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB024_RePrintMENU_164_VPRDB024_RePrintMENU_164',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB024_RePrintMENU_164.component.html'
})
export class VPRDB024_RePrintMENU_164 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB024_RePrintMENU_164";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB024_RePrintMENU_164.x;
    }
    Y() {
        return VPRDB024_RePrintMENU_164.y;
    }
    Width(): string {
        return VPRDB024_RePrintMENU_164.width;
    }
    Height(): string {
        return VPRDB024_RePrintMENU_164.height;
    }
    IsCenteredToWindow() {
        return VPRDB024_RePrintMENU_164.isCenteredToWindow;
    }
    FormName() {
        return VPRDB024_RePrintMENU_164.formName;
    }
    ShowTitleBar() {
        return VPRDB024_RePrintMENU_164.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB024_RePrintMENU_164.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB024_RePrintMENU_164.isResizable;
    }
    IsMovable() {
        return VPRDB024_RePrintMENU_164.isMovable;
    }
}