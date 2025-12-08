import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ERROR_MESSAGE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO041DISPAE_OFF_ENTRY_ERROR_MESSAGE_ERROR_MESSAGE',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./ERROR_MESSAGE.component.css'],
    templateUrl: './ERROR_MESSAGE.component.html'
})
export class ERROR_MESSAGE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ERROR MESSAGE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "220px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return ERROR_MESSAGE.x;
    }
    Y() {
        return ERROR_MESSAGE.y;
    }
    Width(): string {
        return ERROR_MESSAGE.width;
    }
    Height(): string {
        return ERROR_MESSAGE.height;
    }
    IsCenteredToWindow() {
        return ERROR_MESSAGE.isCenteredToWindow;
    }
    FormName() {
        return ERROR_MESSAGE.formName;
    }
    ShowTitleBar() {
        return ERROR_MESSAGE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ERROR_MESSAGE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ERROR_MESSAGE.isResizable;
    }
    IsMovable() {
        return ERROR_MESSAGE.isMovable;
    }
}