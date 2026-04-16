import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AFSHIFTTIMING.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-AFSHIFTTimesLine230_AFSHIFTTIMING',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AFSHIFTTIMING.component.html'
})
export class AFSHIFTTIMING extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AFSHIFTTIMING";
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
        return AFSHIFTTIMING.x;
    }
    Y() {
        return AFSHIFTTIMING.y;
    }
    Width(): string {
        return AFSHIFTTIMING.width;
    }
    Height(): string {
        return AFSHIFTTIMING.height;
    }
    IsCenteredToWindow() {
        return AFSHIFTTIMING.isCenteredToWindow;
    }
    FormName() {
        return AFSHIFTTIMING.formName;
    }
    ShowTitleBar() {
        return AFSHIFTTIMING.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AFSHIFTTIMING.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AFSHIFTTIMING.isResizable;
    }
    IsMovable() {
        return AFSHIFTTIMING.isMovable;
    }
}