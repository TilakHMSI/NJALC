import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDS004PrintingConfir.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDS004PrintingConfir_VPRDS004PrintingConfir',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./VPRDS004PrintingConfir.component.css'],
    templateUrl: './VPRDS004PrintingConfir.component.html'
})
export class VPRDS004PrintingConfir extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDS004 Printing Confirm";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDS004PrintingConfir.x;
    }
    Y() {
        return VPRDS004PrintingConfir.y;
    }
    Width(): string {
        return VPRDS004PrintingConfir.width;
    }
    Height(): string {
        return VPRDS004PrintingConfir.height;
    }
    IsCenteredToWindow() {
        return VPRDS004PrintingConfir.isCenteredToWindow;
    }
    FormName() {
        return VPRDS004PrintingConfir.formName;
    }
    ShowTitleBar() {
        return VPRDS004PrintingConfir.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDS004PrintingConfir.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDS004PrintingConfir.isResizable;
    }
    IsMovable() {
        return VPRDS004PrintingConfir.isMovable;
    }
}