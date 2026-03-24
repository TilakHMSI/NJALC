import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DispatchStopReport.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DispatchStopReport_DispatchStopReport',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DispatchStopReport.component.html'
})
export class DispatchStopReport extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DispatchStopReport";
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
        return DispatchStopReport.x;
    }
    Y() {
        return DispatchStopReport.y;
    }
    Width(): string {
        return DispatchStopReport.width;
    }
    Height(): string {
        return DispatchStopReport.height;
    }
    IsCenteredToWindow() {
        return DispatchStopReport.isCenteredToWindow;
    }
    FormName() {
        return DispatchStopReport.formName;
    }
    ShowTitleBar() {
        return DispatchStopReport.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DispatchStopReport.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DispatchStopReport.isResizable;
    }
    IsMovable() {
        return DispatchStopReport.isMovable;
    }
}