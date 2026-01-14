import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDG004_PRD009_GUIDE_HSC.mg.controls.g";
import { MgDisplayedColumns } from "./VPRDG004_PRD009_GUIDE_HSC.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDG004_PRD009_GUIDE_HSC_VPRDG004_PRD009_GUIDE_HSC',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VPRDG004_PRD009_GUIDE_HSC.component.html'
})
export class VPRDG004_PRD009_GUIDE_HSC extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDG004_PRD009_GUIDE_HSC";
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
        return VPRDG004_PRD009_GUIDE_HSC.x;
    }
    Y() {
        return VPRDG004_PRD009_GUIDE_HSC.y;
    }
    Width(): string {
        return VPRDG004_PRD009_GUIDE_HSC.width;
    }
    Height(): string {
        return VPRDG004_PRD009_GUIDE_HSC.height;
    }
    IsCenteredToWindow() {
        return VPRDG004_PRD009_GUIDE_HSC.isCenteredToWindow;
    }
    FormName() {
        return VPRDG004_PRD009_GUIDE_HSC.formName;
    }
    ShowTitleBar() {
        return VPRDG004_PRD009_GUIDE_HSC.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDG004_PRD009_GUIDE_HSC.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDG004_PRD009_GUIDE_HSC.isResizable;
    }
    IsMovable() {
        return VPRDG004_PRD009_GUIDE_HSC.isMovable;
    }
    override displayedColumns = this.mgdp;
}