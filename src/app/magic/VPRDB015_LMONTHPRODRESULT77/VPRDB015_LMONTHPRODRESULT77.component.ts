import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB015_LMONTHPRODRESULT77.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB015_LMONTHPRODRESULT77_VPRDB015_LMONTHPRODRESULT77',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB015_LMONTHPRODRESULT77.component.html'
})
export class VPRDB015_LMONTHPRODRESULT77 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB015_LMONTHPRODRESULT77";
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
        return VPRDB015_LMONTHPRODRESULT77.x;
    }
    Y() {
        return VPRDB015_LMONTHPRODRESULT77.y;
    }
    Width(): string {
        return VPRDB015_LMONTHPRODRESULT77.width;
    }
    Height(): string {
        return VPRDB015_LMONTHPRODRESULT77.height;
    }
    IsCenteredToWindow() {
        return VPRDB015_LMONTHPRODRESULT77.isCenteredToWindow;
    }
    FormName() {
        return VPRDB015_LMONTHPRODRESULT77.formName;
    }
    ShowTitleBar() {
        return VPRDB015_LMONTHPRODRESULT77.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB015_LMONTHPRODRESULT77.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB015_LMONTHPRODRESULT77.isResizable;
    }
    IsMovable() {
        return VPRDB015_LMONTHPRODRESULT77.isMovable;
    }
}