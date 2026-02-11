import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGINEGUIDE.mg.controls.g";
import { MgDisplayedColumns } from "./ENGINEGUIDE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-ENGINELIST_ENGINEGUIDE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ENGINEGUIDE.component.html'
})
export class ENGINEGUIDE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGINEGUIDE";
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
        return ENGINEGUIDE.x;
    }
    Y() {
        return ENGINEGUIDE.y;
    }
    Width(): string {
        return ENGINEGUIDE.width;
    }
    Height(): string {
        return ENGINEGUIDE.height;
    }
    IsCenteredToWindow() {
        return ENGINEGUIDE.isCenteredToWindow;
    }
    FormName() {
        return ENGINEGUIDE.formName;
    }
    ShowTitleBar() {
        return ENGINEGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGINEGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGINEGUIDE.isResizable;
    }
    IsMovable() {
        return ENGINEGUIDE.isMovable;
    }
    override displayedColumns = this.mgdp;
}