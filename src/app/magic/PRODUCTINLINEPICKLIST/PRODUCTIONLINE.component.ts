import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODUCTIONLINE.mg.controls.g";
import { MgDisplayedColumns } from "./PRODUCTIONLINE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PRODUCTINLINEPICKLIST_PRODUCTIONLINE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PRODUCTIONLINE.component.html'
})
export class PRODUCTIONLINE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODUCTIONLINE";
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
        return PRODUCTIONLINE.x;
    }
    Y() {
        return PRODUCTIONLINE.y;
    }
    Width(): string {
        return PRODUCTIONLINE.width;
    }
    Height(): string {
        return PRODUCTIONLINE.height;
    }
    IsCenteredToWindow() {
        return PRODUCTIONLINE.isCenteredToWindow;
    }
    FormName() {
        return PRODUCTIONLINE.formName;
    }
    ShowTitleBar() {
        return PRODUCTIONLINE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODUCTIONLINE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODUCTIONLINE.isResizable;
    }
    IsMovable() {
        return PRODUCTIONLINE.isMovable;
    }
    override displayedColumns = this.mgdp;
}