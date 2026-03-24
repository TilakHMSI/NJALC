import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAME_RANGE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-FRAMERANGE_HOLDEntry_FRAME_RANGE_FRAME_RANGE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FRAME_RANGE.component.html'
})
export class FRAME_RANGE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAME_RANGE";
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
        return FRAME_RANGE.x;
    }
    Y() {
        return FRAME_RANGE.y;
    }
    Width(): string {
        return FRAME_RANGE.width;
    }
    Height(): string {
        return FRAME_RANGE.height;
    }
    IsCenteredToWindow() {
        return FRAME_RANGE.isCenteredToWindow;
    }
    FormName() {
        return FRAME_RANGE.formName;
    }
    ShowTitleBar() {
        return FRAME_RANGE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAME_RANGE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAME_RANGE.isResizable;
    }
    IsMovable() {
        return FRAME_RANGE.isMovable;
    }
}