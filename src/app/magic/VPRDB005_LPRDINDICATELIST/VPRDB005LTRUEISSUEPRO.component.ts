import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB005LTRUEISSUEPRO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB005_LPRDINDICATELIST_VPRDB005LTRUEISSUEPRO',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB005LTRUEISSUEPRO.component.html'
})
export class VPRDB005LTRUEISSUEPRO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB005LTRUEISSUEPRO";
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
        return VPRDB005LTRUEISSUEPRO.x;
    }
    Y() {
        return VPRDB005LTRUEISSUEPRO.y;
    }
    Width(): string {
        return VPRDB005LTRUEISSUEPRO.width;
    }
    Height(): string {
        return VPRDB005LTRUEISSUEPRO.height;
    }
    IsCenteredToWindow() {
        return VPRDB005LTRUEISSUEPRO.isCenteredToWindow;
    }
    FormName() {
        return VPRDB005LTRUEISSUEPRO.formName;
    }
    ShowTitleBar() {
        return VPRDB005LTRUEISSUEPRO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB005LTRUEISSUEPRO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB005LTRUEISSUEPRO.isResizable;
    }
    IsMovable() {
        return VPRDB005LTRUEISSUEPRO.isMovable;
    }
}