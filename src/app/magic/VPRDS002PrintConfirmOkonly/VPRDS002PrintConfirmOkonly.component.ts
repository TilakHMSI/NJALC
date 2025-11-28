import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDS002PrintConfirmOkonly.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDS002PrintConfirmOkonly_VPRDS002PrintConfirmOkonly',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDS002PrintConfirmOkonly.component.html'
})
export class VPRDS002PrintConfirmOkonly extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDS002PrintConfirmOkonly";
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
        return VPRDS002PrintConfirmOkonly.x;
    }
    Y() {
        return VPRDS002PrintConfirmOkonly.y;
    }
    Width(): string {
        return VPRDS002PrintConfirmOkonly.width;
    }
    Height(): string {
        return VPRDS002PrintConfirmOkonly.height;
    }
    IsCenteredToWindow() {
        return VPRDS002PrintConfirmOkonly.isCenteredToWindow;
    }
    FormName() {
        return VPRDS002PrintConfirmOkonly.formName;
    }
    ShowTitleBar() {
        return VPRDS002PrintConfirmOkonly.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDS002PrintConfirmOkonly.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDS002PrintConfirmOkonly.isResizable;
    }
    IsMovable() {
        return VPRDS002PrintConfirmOkonly.isMovable;
    }
}