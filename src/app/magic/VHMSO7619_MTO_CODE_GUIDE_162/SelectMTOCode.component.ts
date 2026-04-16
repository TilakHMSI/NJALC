import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectMTOCode.mg.controls.g";
import { MgDisplayedColumns } from "./SelectMTOCode.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7619_MTO_CODE_GUIDE_162_SelectMTOCode',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SelectMTOCode.component.html'
})
export class SelectMTOCode extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectMTOCode";
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
        return SelectMTOCode.x;
    }
    Y() {
        return SelectMTOCode.y;
    }
    Width(): string {
        return SelectMTOCode.width;
    }
    Height(): string {
        return SelectMTOCode.height;
    }
    IsCenteredToWindow() {
        return SelectMTOCode.isCenteredToWindow;
    }
    FormName() {
        return SelectMTOCode.formName;
    }
    ShowTitleBar() {
        return SelectMTOCode.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectMTOCode.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectMTOCode.isResizable;
    }
    IsMovable() {
        return SelectMTOCode.isMovable;
    }
    override displayedColumns = this.mgdp;
}