import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB008LTRUEISSUEPRO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB008_LFRAMESEALPRINT_VPRDB008LTRUEISSUEPRO',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB008LTRUEISSUEPRO.component.html',
    styleUrl: './VPRDB008.component.css'
})
export class VPRDB008LTRUEISSUEPRO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB008LTRUEISSUEPRO";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB008LTRUEISSUEPRO.x;
    }
    Y() {
        return VPRDB008LTRUEISSUEPRO.y;
    }
    Width(): string {
        return VPRDB008LTRUEISSUEPRO.width;
    }
    Height(): string {
        return VPRDB008LTRUEISSUEPRO.height;
    }
    IsCenteredToWindow() {
        return VPRDB008LTRUEISSUEPRO.isCenteredToWindow;
    }
    FormName() {
        return VPRDB008LTRUEISSUEPRO.formName;
    }
    ShowTitleBar() {
        return VPRDB008LTRUEISSUEPRO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB008LTRUEISSUEPRO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB008LTRUEISSUEPRO.isResizable;
    }
    IsMovable() {
        return VPRDB008LTRUEISSUEPRO.isMovable;
    }
}