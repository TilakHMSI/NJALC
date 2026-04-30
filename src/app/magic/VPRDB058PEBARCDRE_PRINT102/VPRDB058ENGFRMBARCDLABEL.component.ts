import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB058ENGFRMBARCDLABEL.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB058PEBARCDRE_PRINT102_VPRDB058ENGFRMBARCDLABEL',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB058ENGFRMBARCDLABEL.component.html'
})
export class VPRDB058ENGFRMBARCDLABEL extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB058ENGFRMBARCDLABEL";
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
        return VPRDB058ENGFRMBARCDLABEL.x;
    }
    Y() {
        return VPRDB058ENGFRMBARCDLABEL.y;
    }
    Width(): string {
        return VPRDB058ENGFRMBARCDLABEL.width;
    }
    Height(): string {
        return VPRDB058ENGFRMBARCDLABEL.height;
    }
    IsCenteredToWindow() {
        return VPRDB058ENGFRMBARCDLABEL.isCenteredToWindow;
    }
    FormName() {
        return VPRDB058ENGFRMBARCDLABEL.formName;
    }
    ShowTitleBar() {
        return VPRDB058ENGFRMBARCDLABEL.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB058ENGFRMBARCDLABEL.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB058ENGFRMBARCDLABEL.isResizable;
    }
    IsMovable() {
        return VPRDB058ENGFRMBARCDLABEL.isMovable;
    }
}