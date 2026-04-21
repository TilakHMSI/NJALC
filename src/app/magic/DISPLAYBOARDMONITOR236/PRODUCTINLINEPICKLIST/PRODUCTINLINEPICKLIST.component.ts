import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODUCTINLINEPICKLIST.mg.controls.g";
import { MgDisplayedColumns } from "./PRODUCTINLINEPICKLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DISPLAYBOARDMONITOR236_PRODUCTINLINEPICKLIST_PRODUCTINLINEPICKLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PRODUCTINLINEPICKLIST.component.html'
})
export class PRODUCTINLINEPICKLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODUCTINLINEPICKLIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "400px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PRODUCTINLINEPICKLIST.x;
    }
    Y() {
        return PRODUCTINLINEPICKLIST.y;
    }
    Width(): string {
        return PRODUCTINLINEPICKLIST.width;
    }
    Height(): string {
        return PRODUCTINLINEPICKLIST.height;
    }
    IsCenteredToWindow() {
        return PRODUCTINLINEPICKLIST.isCenteredToWindow;
    }
    FormName() {
        return PRODUCTINLINEPICKLIST.formName;
    }
    ShowTitleBar() {
        return PRODUCTINLINEPICKLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODUCTINLINEPICKLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODUCTINLINEPICKLIST.isResizable;
    }
    IsMovable() {
        return PRODUCTINLINEPICKLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}