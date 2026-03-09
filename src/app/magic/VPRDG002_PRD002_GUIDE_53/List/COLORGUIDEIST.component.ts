import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLORGUIDEIST.mg.controls.g";
import { MgDisplayedColumns } from "./COLORGUIDEIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDG002_PRD002_GUIDE_53_List_COLORGUIDEIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './COLORGUIDEIST.component.html'
})
export class COLORGUIDEIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLORGUIDEIST";
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
        return COLORGUIDEIST.x;
    }
    Y() {
        return COLORGUIDEIST.y;
    }
    Width(): string {
        return COLORGUIDEIST.width;
    }
    Height(): string {
        return COLORGUIDEIST.height;
    }
    IsCenteredToWindow() {
        return COLORGUIDEIST.isCenteredToWindow;
    }
    FormName() {
        return COLORGUIDEIST.formName;
    }
    ShowTitleBar() {
        return COLORGUIDEIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLORGUIDEIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLORGUIDEIST.isResizable;
    }
    IsMovable() {
        return COLORGUIDEIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}