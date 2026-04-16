import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDS004PrintingConfir120.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDS004PrintingConfir120_VPRDS004PrintingConfir120',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDS004PrintingConfir120.component.html'
})
export class VPRDS004PrintingConfir120 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDS004PrintingConfir120";
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
        return VPRDS004PrintingConfir120.x;
    }
    Y() {
        return VPRDS004PrintingConfir120.y;
    }
    Width(): string {
        return VPRDS004PrintingConfir120.width;
    }
    Height(): string {
        return VPRDS004PrintingConfir120.height;
    }
    IsCenteredToWindow() {
        return VPRDS004PrintingConfir120.isCenteredToWindow;
    }
    FormName() {
        return VPRDS004PrintingConfir120.formName;
    }
    ShowTitleBar() {
        return VPRDS004PrintingConfir120.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDS004PrintingConfir120.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDS004PrintingConfir120.isResizable;
    }
    IsMovable() {
        return VPRDS004PrintingConfir120.isMovable;
    }
}