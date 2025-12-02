import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB066RTRUEISSUEPRO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB066_RFIVSPRINTHMSI_VPRDB066RTRUEISSUEPRO',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB066RTRUEISSUEPRO.component.html'
})
export class VPRDB066RTRUEISSUEPRO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB066RTRUEISSUEPRO";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB066RTRUEISSUEPRO.x;
    }
    Y() {
        return VPRDB066RTRUEISSUEPRO.y;
    }
    Width(): string {
        return VPRDB066RTRUEISSUEPRO.width;
    }
    Height(): string {
        return VPRDB066RTRUEISSUEPRO.height;
    }
    IsCenteredToWindow() {
        return VPRDB066RTRUEISSUEPRO.isCenteredToWindow;
    }
    FormName() {
        return VPRDB066RTRUEISSUEPRO.formName;
    }
    ShowTitleBar() {
        return VPRDB066RTRUEISSUEPRO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB066RTRUEISSUEPRO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB066RTRUEISSUEPRO.isResizable;
    }
    IsMovable() {
        return VPRDB066RTRUEISSUEPRO.isMovable;
    }
}