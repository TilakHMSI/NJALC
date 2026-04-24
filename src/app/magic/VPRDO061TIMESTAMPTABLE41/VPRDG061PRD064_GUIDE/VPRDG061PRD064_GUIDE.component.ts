import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDG061PRD064_GUIDE.mg.controls.g";
import { MgDisplayedColumns } from "./VPRDG061PRD064_GUIDE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO061TIMESTAMPTABLE41_VPRDG061PRD064_GUIDE_VPRDG061PRD064_GUIDE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VPRDG061PRD064_GUIDE.component.html'
})
export class VPRDG061PRD064_GUIDE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDG061PRD064_GUIDE";
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
        return VPRDG061PRD064_GUIDE.x;
    }
    Y() {
        return VPRDG061PRD064_GUIDE.y;
    }
    Width(): string {
        return VPRDG061PRD064_GUIDE.width;
    }
    Height(): string {
        return VPRDG061PRD064_GUIDE.height;
    }
    IsCenteredToWindow() {
        return VPRDG061PRD064_GUIDE.isCenteredToWindow;
    }
    FormName() {
        return VPRDG061PRD064_GUIDE.formName;
    }
    ShowTitleBar() {
        return VPRDG061PRD064_GUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDG061PRD064_GUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDG061PRD064_GUIDE.isResizable;
    }
    IsMovable() {
        return VPRDG061PRD064_GUIDE.isMovable;
    }
    override displayedColumns = this.mgdp;
}