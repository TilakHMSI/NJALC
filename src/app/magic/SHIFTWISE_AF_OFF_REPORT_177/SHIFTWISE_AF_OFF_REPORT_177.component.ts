import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SHIFTWISE_AF_OFF_REPORT_177.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SHIFTWISE_AF_OFF_REPORT_177_SHIFTWISE_AF_OFF_REPORT_177',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SHIFTWISE_AF_OFF_REPORT_177.component.html'
})
export class SHIFTWISE_AF_OFF_REPORT_177 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SHIFTWISE_AF_OFF_REPORT_177";
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
        return SHIFTWISE_AF_OFF_REPORT_177.x;
    }
    Y() {
        return SHIFTWISE_AF_OFF_REPORT_177.y;
    }
    Width(): string {
        return SHIFTWISE_AF_OFF_REPORT_177.width;
    }
    Height(): string {
        return SHIFTWISE_AF_OFF_REPORT_177.height;
    }
    IsCenteredToWindow() {
        return SHIFTWISE_AF_OFF_REPORT_177.isCenteredToWindow;
    }
    FormName() {
        return SHIFTWISE_AF_OFF_REPORT_177.formName;
    }
    ShowTitleBar() {
        return SHIFTWISE_AF_OFF_REPORT_177.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SHIFTWISE_AF_OFF_REPORT_177.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SHIFTWISE_AF_OFF_REPORT_177.isResizable;
    }
    IsMovable() {
        return SHIFTWISE_AF_OFF_REPORT_177.isMovable;
    }
}