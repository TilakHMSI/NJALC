import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLORGUIDE.mg.controls.g";
import { MgDisplayedColumns } from "./COLORGUIDE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDG002_PRD002_GUIDE_53_COLORGUIDE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './COLORGUIDE.component.html'
})
export class COLORGUIDE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLORGUIDE";
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
        return COLORGUIDE.x;
    }
    Y() {
        return COLORGUIDE.y;
    }
    Width(): string {
        return COLORGUIDE.width;
    }
    Height(): string {
        return COLORGUIDE.height;
    }
    IsCenteredToWindow() {
        return COLORGUIDE.isCenteredToWindow;
    }
    FormName() {
        return COLORGUIDE.formName;
    }
    ShowTitleBar() {
        return COLORGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLORGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLORGUIDE.isResizable;
    }
    IsMovable() {
        return COLORGUIDE.isMovable;
    }
    override displayedColumns = this.mgdp;
}