import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./OldFormat7.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB024Re_PrintMENU311_OldNewFormatForFrame_OldFormat_OldFormat7',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './OldFormat7.component.html'
})
export class OldFormat7 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "OldFormat7";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return OldFormat7.x;
    }
    Y() {
        return OldFormat7.y;
    }
    Width(): string {
        return OldFormat7.width;
    }
    Height(): string {
        return OldFormat7.height;
    }
    IsCenteredToWindow() {
        return OldFormat7.isCenteredToWindow;
    }
    FormName() {
        return OldFormat7.formName;
    }
    ShowTitleBar() {
        return OldFormat7.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return OldFormat7.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return OldFormat7.isResizable;
    }
    IsMovable() {
        return OldFormat7.isMovable;
    }
}