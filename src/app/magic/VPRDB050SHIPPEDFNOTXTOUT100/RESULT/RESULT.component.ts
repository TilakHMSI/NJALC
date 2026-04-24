import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./RESULT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB050SHIPPEDFNOTXTOUT100_RESULT_RESULT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './RESULT.component.html'
})
export class RESULT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "RESULT";
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
        return RESULT.x;
    }
    Y() {
        return RESULT.y;
    }
    Width(): string {
        return RESULT.width;
    }
    Height(): string {
        return RESULT.height;
    }
    IsCenteredToWindow() {
        return RESULT.isCenteredToWindow;
    }
    FormName() {
        return RESULT.formName;
    }
    ShowTitleBar() {
        return RESULT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return RESULT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return RESULT.isResizable;
    }
    IsMovable() {
        return RESULT.isMovable;
    }
}