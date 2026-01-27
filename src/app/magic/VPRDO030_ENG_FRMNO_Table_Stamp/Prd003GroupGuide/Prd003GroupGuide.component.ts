import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Prd003GroupGuide.mg.controls.g";
import { MgDisplayedColumns } from "./Prd003GroupGuide.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO030_ENG_FRMNO_Table_Stamp_Prd003GroupGuide_Prd003GroupGuide',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './Prd003GroupGuide.component.html'
})
export class Prd003GroupGuide extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Group Guide";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "350px";
    private static readonly height: string = "450px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return Prd003GroupGuide.x;
    }
    Y() {
        return Prd003GroupGuide.y;
    }
    Width(): string {
        return Prd003GroupGuide.width;
    }
    Height(): string {
        return Prd003GroupGuide.height;
    }
    IsCenteredToWindow() {
        return Prd003GroupGuide.isCenteredToWindow;
    }
    FormName() {
        return Prd003GroupGuide.formName;
    }
    ShowTitleBar() {
        return Prd003GroupGuide.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Prd003GroupGuide.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Prd003GroupGuide.isResizable;
    }
    IsMovable() {
        return Prd003GroupGuide.isMovable;
    }
    override displayedColumns = this.mgdp;
}