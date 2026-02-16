import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLORLIST.mg.controls.g";
import { MgDisplayedColumns } from "./COLORLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO012_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD002_MAITENANCE_COLORLIST_COLORLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './COLORLIST.component.html'
})
export class COLORLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLOR LIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return COLORLIST.x;
    }
    Y() {
        return COLORLIST.y;
    }
    Width(): string {
        return COLORLIST.width;
    }
    Height(): string {
        return COLORLIST.height;
    }
    IsCenteredToWindow() {
        return COLORLIST.isCenteredToWindow;
    }
    FormName() {
        return COLORLIST.formName;
    }
    ShowTitleBar() {
        return COLORLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLORLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLORLIST.isResizable;
    }
    IsMovable() {
        return COLORLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}