import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB014_LNONINSPFRMLIST76.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB014_LNONINSPFRMLIST76_VPRDB014_LNONINSPFRMLIST76',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB014_LNONINSPFRMLIST76.component.html'
})
export class VPRDB014_LNONINSPFRMLIST76 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB014_LNONINSPFRMLIST76";
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
        return VPRDB014_LNONINSPFRMLIST76.x;
    }
    Y() {
        return VPRDB014_LNONINSPFRMLIST76.y;
    }
    Width(): string {
        return VPRDB014_LNONINSPFRMLIST76.width;
    }
    Height(): string {
        return VPRDB014_LNONINSPFRMLIST76.height;
    }
    IsCenteredToWindow() {
        return VPRDB014_LNONINSPFRMLIST76.isCenteredToWindow;
    }
    FormName() {
        return VPRDB014_LNONINSPFRMLIST76.formName;
    }
    ShowTitleBar() {
        return VPRDB014_LNONINSPFRMLIST76.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB014_LNONINSPFRMLIST76.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB014_LNONINSPFRMLIST76.isResizable;
    }
    IsMovable() {
        return VPRDB014_LNONINSPFRMLIST76.isMovable;
    }
}