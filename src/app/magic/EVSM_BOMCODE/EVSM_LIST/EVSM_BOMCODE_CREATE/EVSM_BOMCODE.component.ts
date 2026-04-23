import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./EVSM_BOMCODE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EVSM_BOMCODE_EVSM_LIST_EVSM_BOMCODE_CREATE_EVSM_BOMCODE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './EVSM_BOMCODE.component.html'
})
export class EVSM_BOMCODE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "EVSM_BOMCODE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "550px";
    private static readonly height: string = "320px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return EVSM_BOMCODE.x;
    }
    Y() {
        return EVSM_BOMCODE.y;
    }
    Width(): string {
        return EVSM_BOMCODE.width;
    }
    Height(): string {
        return EVSM_BOMCODE.height;
    }
    IsCenteredToWindow() {
        return EVSM_BOMCODE.isCenteredToWindow;
    }
    FormName() {
        return EVSM_BOMCODE.formName;
    }
    ShowTitleBar() {
        return EVSM_BOMCODE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return EVSM_BOMCODE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return EVSM_BOMCODE.isResizable;
    }
    IsMovable() {
        return EVSM_BOMCODE.isMovable;
    }
}