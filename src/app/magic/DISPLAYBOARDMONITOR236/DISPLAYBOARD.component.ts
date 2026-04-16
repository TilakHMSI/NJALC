import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DISPLAYBOARD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DISPLAYBOARDMONITOR236_DISPLAYBOARD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DISPLAYBOARD.component.html'
})
export class DISPLAYBOARD extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DISPLAYBOARD";
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
        return DISPLAYBOARD.x;
    }
    Y() {
        return DISPLAYBOARD.y;
    }
    Width(): string {
        return DISPLAYBOARD.width;
    }
    Height(): string {
        return DISPLAYBOARD.height;
    }
    IsCenteredToWindow() {
        return DISPLAYBOARD.isCenteredToWindow;
    }
    FormName() {
        return DISPLAYBOARD.formName;
    }
    ShowTitleBar() {
        return DISPLAYBOARD.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DISPLAYBOARD.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DISPLAYBOARD.isResizable;
    }
    IsMovable() {
        return DISPLAYBOARD.isMovable;
    }
}