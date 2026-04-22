import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CONFIRM.mg.controls.g";
import { MgDisplayedColumns } from "./CONFIRM.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7624ReprintentryHMSI210_CONFIRM_CONFIRM',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CONFIRM.component.css'],
    templateUrl: './CONFIRM.component.html'
})
export class CONFIRM extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CONFIRM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1000px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = false;
    X() {
        return CONFIRM.x;
    }
    Y() {
        return CONFIRM.y;
    }
    Width(): string {
        return CONFIRM.width;
    }
    Height(): string {
        return CONFIRM.height;
    }
    IsCenteredToWindow() {
        return CONFIRM.isCenteredToWindow;
    }
    FormName() {
        return CONFIRM.formName;
    }
    ShowTitleBar() {
        return CONFIRM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CONFIRM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CONFIRM.isResizable;
    }
    IsMovable() {
        return CONFIRM.isMovable;
    }
    override displayedColumns = this.mgdp;
}