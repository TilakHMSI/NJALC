import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FrameEngineResult.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7679FRAME_ENGINE187_FrameEngineResult',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FrameEngineResult.component.html'
})
export class FrameEngineResult extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FrameEngineResult";
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
        return FrameEngineResult.x;
    }
    Y() {
        return FrameEngineResult.y;
    }
    Width(): string {
        return FrameEngineResult.width;
    }
    Height(): string {
        return FrameEngineResult.height;
    }
    IsCenteredToWindow() {
        return FrameEngineResult.isCenteredToWindow;
    }
    FormName() {
        return FrameEngineResult.formName;
    }
    ShowTitleBar() {
        return FrameEngineResult.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FrameEngineResult.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FrameEngineResult.isResizable;
    }
    IsMovable() {
        return FrameEngineResult.isMovable;
    }
}