import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FrameWiseDefectReport.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS011PendingFrames_FrameWiseDefectReport',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FrameWiseDefectReport.component.html'
})
export class FrameWiseDefectReport extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FrameWiseDefectReport";
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
        return FrameWiseDefectReport.x;
    }
    Y() {
        return FrameWiseDefectReport.y;
    }
    Width(): string {
        return FrameWiseDefectReport.width;
    }
    Height(): string {
        return FrameWiseDefectReport.height;
    }
    IsCenteredToWindow() {
        return FrameWiseDefectReport.isCenteredToWindow;
    }
    FormName() {
        return FrameWiseDefectReport.formName;
    }
    ShowTitleBar() {
        return FrameWiseDefectReport.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FrameWiseDefectReport.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FrameWiseDefectReport.isResizable;
    }
    IsMovable() {
        return FrameWiseDefectReport.isMovable;
    }
}