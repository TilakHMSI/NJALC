import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AFTargetProductionLine.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-AFTARGET_PROD_LINE229_AFTargetProductionLine',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AFTargetProductionLine.component.html'
})
export class AFTargetProductionLine extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AFTargetProductionLine";
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
        return AFTargetProductionLine.x;
    }
    Y() {
        return AFTargetProductionLine.y;
    }
    Width(): string {
        return AFTargetProductionLine.width;
    }
    Height(): string {
        return AFTargetProductionLine.height;
    }
    IsCenteredToWindow() {
        return AFTargetProductionLine.isCenteredToWindow;
    }
    FormName() {
        return AFTargetProductionLine.formName;
    }
    ShowTitleBar() {
        return AFTargetProductionLine.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AFTargetProductionLine.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AFTargetProductionLine.isResizable;
    }
    IsMovable() {
        return AFTargetProductionLine.isMovable;
    }
}