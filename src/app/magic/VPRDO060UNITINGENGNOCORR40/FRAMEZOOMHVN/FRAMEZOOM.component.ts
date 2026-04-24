import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMEZOOM.mg.controls.g";
import { MgDisplayedColumns } from "./FRAMEZOOM.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO060UNITINGENGNOCORR40_FRAMEZOOMHVN_FRAMEZOOM',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './FRAMEZOOM.component.html'
})
export class FRAMEZOOM extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAMEZOOM";
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
        return FRAMEZOOM.x;
    }
    Y() {
        return FRAMEZOOM.y;
    }
    Width(): string {
        return FRAMEZOOM.width;
    }
    Height(): string {
        return FRAMEZOOM.height;
    }
    IsCenteredToWindow() {
        return FRAMEZOOM.isCenteredToWindow;
    }
    FormName() {
        return FRAMEZOOM.formName;
    }
    ShowTitleBar() {
        return FRAMEZOOM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAMEZOOM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAMEZOOM.isResizable;
    }
    IsMovable() {
        return FRAMEZOOM.isMovable;
    }
    override displayedColumns = this.mgdp;
}