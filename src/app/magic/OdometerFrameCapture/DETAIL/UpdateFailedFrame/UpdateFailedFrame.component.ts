import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./UpdateFailedFrame.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-OdometerFrameCapture_DETAIL_UpdateFailedFrame_UpdateFailedFrame',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./UpdateFailedFrame.component.css'],
    templateUrl: './UpdateFailedFrame.component.html'
})
export class UpdateFailedFrame extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "UpdateFailedFrame";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "950px";
    private static readonly height: string = "520px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return UpdateFailedFrame.x;
    }
    Y() {
        return UpdateFailedFrame.y;
    }
    Width(): string {
        return UpdateFailedFrame.width;
    }
    Height(): string {
        return UpdateFailedFrame.height;
    }
    IsCenteredToWindow() {
        return UpdateFailedFrame.isCenteredToWindow;
    }
    FormName() {
        return UpdateFailedFrame.formName;
    }
    ShowTitleBar() {
        return UpdateFailedFrame.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return UpdateFailedFrame.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return UpdateFailedFrame.isResizable;
    }
    IsMovable() {
        return UpdateFailedFrame.isMovable;
    }
}