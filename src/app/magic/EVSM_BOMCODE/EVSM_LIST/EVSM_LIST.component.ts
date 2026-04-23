import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./EVSM_LIST.mg.controls.g";
import { MgDisplayedColumns } from "./EVSM_LIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EVSM_BOMCODE_EVSM_LIST_EVSM_LIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './EVSM_LIST.component.html'
})
export class EVSM_LIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "EVSM_LIST";
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
        return EVSM_LIST.x;
    }
    Y() {
        return EVSM_LIST.y;
    }
    Width(): string {
        return EVSM_LIST.width;
    }
    Height(): string {
        return EVSM_LIST.height;
    }
    IsCenteredToWindow() {
        return EVSM_LIST.isCenteredToWindow;
    }
    FormName() {
        return EVSM_LIST.formName;
    }
    ShowTitleBar() {
        return EVSM_LIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return EVSM_LIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return EVSM_LIST.isResizable;
    }
    IsMovable() {
        return EVSM_LIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}