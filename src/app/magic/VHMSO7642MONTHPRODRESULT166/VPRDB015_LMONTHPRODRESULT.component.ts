import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB015_LMONTHPRODRESULT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7642MONTHPRODRESULT166_VPRDB015_LMONTHPRODRESULT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB015_LMONTHPRODRESULT.component.html'
})
export class VPRDB015_LMONTHPRODRESULT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB015_LMONTHPRODRESULT";
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
        return VPRDB015_LMONTHPRODRESULT.x;
    }
    Y() {
        return VPRDB015_LMONTHPRODRESULT.y;
    }
    Width(): string {
        return VPRDB015_LMONTHPRODRESULT.width;
    }
    Height(): string {
        return VPRDB015_LMONTHPRODRESULT.height;
    }
    IsCenteredToWindow() {
        return VPRDB015_LMONTHPRODRESULT.isCenteredToWindow;
    }
    FormName() {
        return VPRDB015_LMONTHPRODRESULT.formName;
    }
    ShowTitleBar() {
        return VPRDB015_LMONTHPRODRESULT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB015_LMONTHPRODRESULT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB015_LMONTHPRODRESULT.isResizable;
    }
    IsMovable() {
        return VPRDB015_LMONTHPRODRESULT.isMovable;
    }
}