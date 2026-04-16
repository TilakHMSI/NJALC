import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AESHIFTTIMING.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-AEShiftTimesLine232_AESHIFTTIMING',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AESHIFTTIMING.component.html'
})
export class AESHIFTTIMING extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AESHIFTTIMING";
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
        return AESHIFTTIMING.x;
    }
    Y() {
        return AESHIFTTIMING.y;
    }
    Width(): string {
        return AESHIFTTIMING.width;
    }
    Height(): string {
        return AESHIFTTIMING.height;
    }
    IsCenteredToWindow() {
        return AESHIFTTIMING.isCenteredToWindow;
    }
    FormName() {
        return AESHIFTTIMING.formName;
    }
    ShowTitleBar() {
        return AESHIFTTIMING.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AESHIFTTIMING.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AESHIFTTIMING.isResizable;
    }
    IsMovable() {
        return AESHIFTTIMING.isMovable;
    }
}