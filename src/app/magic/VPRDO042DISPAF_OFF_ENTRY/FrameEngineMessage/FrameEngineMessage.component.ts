import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FrameEngineMessage.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO042DISPAF_OFF_ENTRY_FrameEngineMessage_FrameEngineMessage',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FrameEngineMessage.component.html'
})
export class FrameEngineMessage extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FrameEngineMessage";
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
        return FrameEngineMessage.x;
    }
    Y() {
        return FrameEngineMessage.y;
    }
    Width(): string {
        return FrameEngineMessage.width;
    }
    Height(): string {
        return FrameEngineMessage.height;
    }
    IsCenteredToWindow() {
        return FrameEngineMessage.isCenteredToWindow;
    }
    FormName() {
        return FrameEngineMessage.formName;
    }
    ShowTitleBar() {
        return FrameEngineMessage.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FrameEngineMessage.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FrameEngineMessage.isResizable;
    }
    IsMovable() {
        return FrameEngineMessage.isMovable;
    }
}