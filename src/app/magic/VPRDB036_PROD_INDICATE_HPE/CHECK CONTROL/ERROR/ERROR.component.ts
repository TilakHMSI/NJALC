import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ERROR.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB036_PROD_INDICATE_HPE_CHECK CONTROL_ERROR_ERROR',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ERROR.component.html'
})
export class ERROR extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ERROR";
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
        return ERROR.x;
    }
    Y() {
        return ERROR.y;
    }
    Width(): string {
        return ERROR.width;
    }
    Height(): string {
        return ERROR.height;
    }
    IsCenteredToWindow() {
        return ERROR.isCenteredToWindow;
    }
    FormName() {
        return ERROR.formName;
    }
    ShowTitleBar() {
        return ERROR.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ERROR.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ERROR.isResizable;
    }
    IsMovable() {
        return ERROR.isMovable;
    }
}