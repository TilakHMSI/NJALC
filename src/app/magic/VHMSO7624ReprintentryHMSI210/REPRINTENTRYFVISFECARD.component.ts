import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./REPRINTENTRYFVISFECARD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7624ReprintentryHMSI210_REPRINTENTRYFVISFECARD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './REPRINTENTRYFVISFECARD.component.html'
})
export class REPRINTENTRYFVISFECARD extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "REPRINTENTRYFVISFECARD";
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
        return REPRINTENTRYFVISFECARD.x;
    }
    Y() {
        return REPRINTENTRYFVISFECARD.y;
    }
    Width(): string {
        return REPRINTENTRYFVISFECARD.width;
    }
    Height(): string {
        return REPRINTENTRYFVISFECARD.height;
    }
    IsCenteredToWindow() {
        return REPRINTENTRYFVISFECARD.isCenteredToWindow;
    }
    FormName() {
        return REPRINTENTRYFVISFECARD.formName;
    }
    ShowTitleBar() {
        return REPRINTENTRYFVISFECARD.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return REPRINTENTRYFVISFECARD.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return REPRINTENTRYFVISFECARD.isResizable;
    }
    IsMovable() {
        return REPRINTENTRYFVISFECARD.isMovable;
    }
}