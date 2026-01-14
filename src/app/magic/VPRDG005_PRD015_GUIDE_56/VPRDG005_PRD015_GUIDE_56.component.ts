import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDG005_PRD015_GUIDE_56.mg.controls.g";
import { MgDisplayedColumns } from "./VPRDG005_PRD015_GUIDE_56.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";



@Component({
    selector: 'mga-VPRDG005_PRD015_GUIDE_56_VPRDG005_PRD015_GUIDE_56',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VPRDG005_PRD015_GUIDE_56.component.html'
})
export class VPRDG005_PRD015_GUIDE_56 extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDG005";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "400px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDG005_PRD015_GUIDE_56.x;
    }
    Y() {
        return VPRDG005_PRD015_GUIDE_56.y;
    }
    Width(): string {
        return VPRDG005_PRD015_GUIDE_56.width;
    }
    Height(): string {
        return VPRDG005_PRD015_GUIDE_56.height;
    }
    IsCenteredToWindow() {
        return VPRDG005_PRD015_GUIDE_56.isCenteredToWindow;
    }
    FormName() {
        return VPRDG005_PRD015_GUIDE_56.formName;
    }
    ShowTitleBar() {
        return VPRDG005_PRD015_GUIDE_56.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDG005_PRD015_GUIDE_56.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDG005_PRD015_GUIDE_56.isResizable;
    }
    IsMovable() {
        return VPRDG005_PRD015_GUIDE_56.isMovable;
    }
    override displayedColumns = this.mgdp;
}