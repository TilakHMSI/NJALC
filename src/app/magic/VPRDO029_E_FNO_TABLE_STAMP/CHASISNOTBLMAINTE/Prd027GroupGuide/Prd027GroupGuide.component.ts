import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Prd027GroupGuide.mg.controls.g";
import { MgDisplayedColumns } from "./Prd027GroupGuide.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO029_E_FNO_TABLE_STAMP_CHASISNOTBLMAINTE_Prd027GroupGuide_Prd027GroupGuide',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./Prd027GroupGuide.component.css'],
    templateUrl: './Prd027GroupGuide.component.html'
})
export class Prd027GroupGuide extends BaseMatTableMagicComponent implements MagicModalInterface {

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
    private static readonly width: string = "500px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return Prd027GroupGuide.x;
    }
    Y() {
        return Prd027GroupGuide.y;
    }
    Width(): string {
        return Prd027GroupGuide.width;
    }
    Height(): string {
        return Prd027GroupGuide.height;
    }
    IsCenteredToWindow() {
        return Prd027GroupGuide.isCenteredToWindow;
    }
    FormName() {
        return Prd027GroupGuide.formName;
    }
    ShowTitleBar() {
        return Prd027GroupGuide.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Prd027GroupGuide.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Prd027GroupGuide.isResizable;
    }
    IsMovable() {
        return Prd027GroupGuide.isMovable;
    }
    override displayedColumns = this.mgdp;
}