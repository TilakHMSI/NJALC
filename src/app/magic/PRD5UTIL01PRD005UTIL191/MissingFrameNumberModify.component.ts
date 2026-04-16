import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MissingFrameNumberModify.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PRD5UTIL01PRD005UTIL191_MissingFrameNumberModify',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MissingFrameNumberModify.component.html'
})
export class MissingFrameNumberModify extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MissingFrameNumberModify";
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
        return MissingFrameNumberModify.x;
    }
    Y() {
        return MissingFrameNumberModify.y;
    }
    Width(): string {
        return MissingFrameNumberModify.width;
    }
    Height(): string {
        return MissingFrameNumberModify.height;
    }
    IsCenteredToWindow() {
        return MissingFrameNumberModify.isCenteredToWindow;
    }
    FormName() {
        return MissingFrameNumberModify.formName;
    }
    ShowTitleBar() {
        return MissingFrameNumberModify.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MissingFrameNumberModify.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MissingFrameNumberModify.isResizable;
    }
    IsMovable() {
        return MissingFrameNumberModify.isMovable;
    }
}