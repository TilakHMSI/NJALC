import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MODELGUIDE.mg.controls.g";
import { MgDisplayedColumns } from "./MODELGUIDE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDG001_PRD001_GUIDE2_MODELGUIDE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './MODELGUIDE.component.html'
})
export class MODELGUIDE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MODELGUIDE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return MODELGUIDE.x;
    }
    Y() {
        return MODELGUIDE.y;
    }
    Width(): string {
        return MODELGUIDE.width;
    }
    Height(): string {
        return MODELGUIDE.height;
    }
    IsCenteredToWindow() {
        return MODELGUIDE.isCenteredToWindow;
    }
    FormName() {
        return MODELGUIDE.formName;
    }
    ShowTitleBar() {
        return MODELGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MODELGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MODELGUIDE.isResizable;
    }
    IsMovable() {
        return MODELGUIDE.isMovable;
    }
    override displayedColumns = this.mgdp;
}