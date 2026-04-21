import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Prd_hold_frameReport.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PRDHOLDFRAMEREPORT240_Prd_hold_frameReport',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './Prd_hold_frameReport.component.html'
})
export class Prd_hold_frameReport extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Prd_hold_frameReport";
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
        return Prd_hold_frameReport.x;
    }
    Y() {
        return Prd_hold_frameReport.y;
    }
    Width(): string {
        return Prd_hold_frameReport.width;
    }
    Height(): string {
        return Prd_hold_frameReport.height;
    }
    IsCenteredToWindow() {
        return Prd_hold_frameReport.isCenteredToWindow;
    }
    FormName() {
        return Prd_hold_frameReport.formName;
    }
    ShowTitleBar() {
        return Prd_hold_frameReport.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Prd_hold_frameReport.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Prd_hold_frameReport.isResizable;
    }
    IsMovable() {
        return Prd_hold_frameReport.isMovable;
    }
}