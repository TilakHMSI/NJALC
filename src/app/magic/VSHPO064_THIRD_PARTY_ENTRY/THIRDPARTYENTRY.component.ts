import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./THIRDPARTYENTRY.mg.controls.g";
import { MgDisplayedColumns } from "./THIRDPARTYENTRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VSHPO064_THIRD_PARTY_ENTRY_THIRDPARTYENTRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './THIRDPARTYENTRY.component.html'
})
export class THIRDPARTYENTRY extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "THIRDPARTYENTRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return THIRDPARTYENTRY.x;
    }
    Y() {
        return THIRDPARTYENTRY.y;
    }
    Width(): string {
        return THIRDPARTYENTRY.width;
    }
    Height(): string {
        return THIRDPARTYENTRY.height;
    }
    IsCenteredToWindow() {
        return THIRDPARTYENTRY.isCenteredToWindow;
    }
    FormName() {
        return THIRDPARTYENTRY.formName;
    }
    ShowTitleBar() {
        return THIRDPARTYENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return THIRDPARTYENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return THIRDPARTYENTRY.isResizable;
    }
    IsMovable() {
        return THIRDPARTYENTRY.isMovable;
    }
    override displayedColumns = this.mgdp;
}