import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DPRStatusReport.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS008_DPRStatusReport_DPRStatusReport',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DPRStatusReport.component.html'
})
export class DPRStatusReport extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DPRStatusReport";
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
        return DPRStatusReport.x;
    }
    Y() {
        return DPRStatusReport.y;
    }
    Width(): string {
        return DPRStatusReport.width;
    }
    Height(): string {
        return DPRStatusReport.height;
    }
    IsCenteredToWindow() {
        return DPRStatusReport.isCenteredToWindow;
    }
    FormName() {
        return DPRStatusReport.formName;
    }
    ShowTitleBar() {
        return DPRStatusReport.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DPRStatusReport.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DPRStatusReport.isResizable;
    }
    IsMovable() {
        return DPRStatusReport.isMovable;
    }
}