import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FrameCapture.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-OdometerFrameCapture_FrameCapture',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./FrameCapture.component.css'],
    templateUrl: './FrameCapture.component.html'
})
export class FrameCapture extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FrameCapture";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return FrameCapture.x;
    }
    Y() {
        return FrameCapture.y;
    }
    Width(): string {
        return FrameCapture.width;
    }
    Height(): string {
        return FrameCapture.height;
    }
    IsCenteredToWindow() {
        return FrameCapture.isCenteredToWindow;
    }
    FormName() {
        return FrameCapture.formName;
    }
    ShowTitleBar() {
        return FrameCapture.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FrameCapture.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FrameCapture.isResizable;
    }
    IsMovable() {
        return FrameCapture.isMovable;
    }
}