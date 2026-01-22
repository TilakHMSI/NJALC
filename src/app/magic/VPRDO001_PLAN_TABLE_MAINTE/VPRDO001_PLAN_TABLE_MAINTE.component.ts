import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDO001_PLAN_TABLE_MAINTE.mg.controls.g";
import { MgDisplayedColumns } from "./VPRDO001_PLAN_TABLE_MAINTE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO001_PLAN_TABLE_MAINTE_VPRDO001_PLAN_TABLE_MAINTE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VPRDO001_PLAN_TABLE_MAINTE.component.html'
})
export class VPRDO001_PLAN_TABLE_MAINTE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PLAN TABLE MAINTENANCE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1000px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDO001_PLAN_TABLE_MAINTE.x;
    }
    Y() {
        return VPRDO001_PLAN_TABLE_MAINTE.y;
    }
    Width(): string {
        return VPRDO001_PLAN_TABLE_MAINTE.width;
    }
    Height(): string {
        return VPRDO001_PLAN_TABLE_MAINTE.height;
    }
    IsCenteredToWindow() {
        return VPRDO001_PLAN_TABLE_MAINTE.isCenteredToWindow;
    }
    FormName() {
        return VPRDO001_PLAN_TABLE_MAINTE.formName;
    }
    ShowTitleBar() {
        return VPRDO001_PLAN_TABLE_MAINTE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDO001_PLAN_TABLE_MAINTE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDO001_PLAN_TABLE_MAINTE.isResizable;
    }
    IsMovable() {
        return VPRDO001_PLAN_TABLE_MAINTE.isMovable;
    }
    override displayedColumns = this.mgdp;
}