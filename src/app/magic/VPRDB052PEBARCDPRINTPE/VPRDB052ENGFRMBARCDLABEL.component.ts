import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB052ENGFRMBARCDLABEL.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB052PEBARCDPRINTPE_VPRDB052ENGFRMBARCDLABEL',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB052ENGFRMBARCDLABEL.component.html'
})
export class VPRDB052ENGFRMBARCDLABEL extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB052ENGFRMBARCDLABEL";
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
        return VPRDB052ENGFRMBARCDLABEL.x;
    }
    Y() {
        return VPRDB052ENGFRMBARCDLABEL.y;
    }
    Width(): string {
        return VPRDB052ENGFRMBARCDLABEL.width;
    }
    Height(): string {
        return VPRDB052ENGFRMBARCDLABEL.height;
    }
    IsCenteredToWindow() {
        return VPRDB052ENGFRMBARCDLABEL.isCenteredToWindow;
    }
    FormName() {
        return VPRDB052ENGFRMBARCDLABEL.formName;
    }
    ShowTitleBar() {
        return VPRDB052ENGFRMBARCDLABEL.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB052ENGFRMBARCDLABEL.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB052ENGFRMBARCDLABEL.isResizable;
    }
    IsMovable() {
        return VPRDB052ENGFRMBARCDLABEL.isMovable;
    }
}