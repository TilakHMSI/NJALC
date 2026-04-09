import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PLAN_TABLE_MAINTE_LIST.mg.controls.g";
import { MgDisplayedColumns } from "./PLAN_TABLE_MAINTE_LIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO001_PLAN_TABLE_MAINTE_PLAN_TABLE_MAINTE_LIST_PLAN_TABLE_MAINTE_LIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PLAN_TABLE_MAINTE_LIST.component.html'
})
export class PLAN_TABLE_MAINTE_LIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PLAN_TABLE_MAINTE_LIST";
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
        return PLAN_TABLE_MAINTE_LIST.x;
    }
    Y() {
        return PLAN_TABLE_MAINTE_LIST.y;
    }
    Width(): string {
        return PLAN_TABLE_MAINTE_LIST.width;
    }
    Height(): string {
        return PLAN_TABLE_MAINTE_LIST.height;
    }
    IsCenteredToWindow() {
        return PLAN_TABLE_MAINTE_LIST.isCenteredToWindow;
    }
    FormName() {
        return PLAN_TABLE_MAINTE_LIST.formName;
    }
    ShowTitleBar() {
        return PLAN_TABLE_MAINTE_LIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PLAN_TABLE_MAINTE_LIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PLAN_TABLE_MAINTE_LIST.isResizable;
    }
    IsMovable() {
        return PLAN_TABLE_MAINTE_LIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}