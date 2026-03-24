import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAME_WISE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-FRAMEWISEHOLDEntryFrameWise_FRAME_WISE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FRAME_WISE.component.html'
})
export class FRAME_WISE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAME_WISE";
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
        return FRAME_WISE.x;
    }
    Y() {
        return FRAME_WISE.y;
    }
    Width(): string {
        return FRAME_WISE.width;
    }
    Height(): string {
        return FRAME_WISE.height;
    }
    IsCenteredToWindow() {
        return FRAME_WISE.isCenteredToWindow;
    }
    FormName() {
        return FRAME_WISE.formName;
    }
    ShowTitleBar() {
        return FRAME_WISE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAME_WISE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAME_WISE.isResizable;
    }
    IsMovable() {
        return FRAME_WISE.isMovable;
    }
}