import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GUIDEPRD003.mg.controls.g";
import { MgDisplayedColumns } from "./GUIDEPRD003.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7624_Reprintentry_HMSI163_GUIDEPRD003_GUIDEPRD003',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './GUIDEPRD003.component.html'
})
export class GUIDEPRD003 extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GUIDEPRD003";
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
        return GUIDEPRD003.x;
    }
    Y() {
        return GUIDEPRD003.y;
    }
    Width(): string {
        return GUIDEPRD003.width;
    }
    Height(): string {
        return GUIDEPRD003.height;
    }
    IsCenteredToWindow() {
        return GUIDEPRD003.isCenteredToWindow;
    }
    FormName() {
        return GUIDEPRD003.formName;
    }
    ShowTitleBar() {
        return GUIDEPRD003.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GUIDEPRD003.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GUIDEPRD003.isResizable;
    }
    IsMovable() {
        return GUIDEPRD003.isMovable;
    }
    override displayedColumns = this.mgdp;
}