import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB007RTRUEISSUEPRO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB007_RENGPRINTHVNetc_VPRDB007RTRUEISSUEPRO',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB007RTRUEISSUEPRO.component.html'
})
export class VPRDB007RTRUEISSUEPRO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB007RTRUEISSUEPRO";
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
        return VPRDB007RTRUEISSUEPRO.x;
    }
    Y() {
        return VPRDB007RTRUEISSUEPRO.y;
    }
    Width(): string {
        return VPRDB007RTRUEISSUEPRO.width;
    }
    Height(): string {
        return VPRDB007RTRUEISSUEPRO.height;
    }
    IsCenteredToWindow() {
        return VPRDB007RTRUEISSUEPRO.isCenteredToWindow;
    }
    FormName() {
        return VPRDB007RTRUEISSUEPRO.formName;
    }
    ShowTitleBar() {
        return VPRDB007RTRUEISSUEPRO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB007RTRUEISSUEPRO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB007RTRUEISSUEPRO.isResizable;
    }
    IsMovable() {
        return VPRDB007RTRUEISSUEPRO.isMovable;
    }
}