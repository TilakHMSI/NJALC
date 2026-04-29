import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGINEZOOM.mg.controls.g";
import { MgDisplayedColumns } from "./ENGINEZOOM.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO060UNITINGENGNOCORR40_ENGINEZOOM_ENGINEZOOM',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ENGINEZOOM.component.html'
})
export class ENGINEZOOM extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGINEZOOM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return ENGINEZOOM.x;
    }
    Y() {
        return ENGINEZOOM.y;
    }
    Width(): string {
        return ENGINEZOOM.width;
    }
    Height(): string {
        return ENGINEZOOM.height;
    }
    IsCenteredToWindow() {
        return ENGINEZOOM.isCenteredToWindow;
    }
    FormName() {
        return ENGINEZOOM.formName;
    }
    ShowTitleBar() {
        return ENGINEZOOM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGINEZOOM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGINEZOOM.isResizable;
    }
    IsMovable() {
        return ENGINEZOOM.isMovable;
    }
    override displayedColumns = this.mgdp;
}