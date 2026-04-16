import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SHIFTPICKLIST.mg.controls.g";
import { MgDisplayedColumns } from "./SHIFTPICKLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SHIFTPICKLIST_SHIFTPICKLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SHIFTPICKLIST.component.html'
})
export class SHIFTPICKLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SHIFTPICKLIST";
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
        return SHIFTPICKLIST.x;
    }
    Y() {
        return SHIFTPICKLIST.y;
    }
    Width(): string {
        return SHIFTPICKLIST.width;
    }
    Height(): string {
        return SHIFTPICKLIST.height;
    }
    IsCenteredToWindow() {
        return SHIFTPICKLIST.isCenteredToWindow;
    }
    FormName() {
        return SHIFTPICKLIST.formName;
    }
    ShowTitleBar() {
        return SHIFTPICKLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SHIFTPICKLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SHIFTPICKLIST.isResizable;
    }
    IsMovable() {
        return SHIFTPICKLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}