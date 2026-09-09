import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DETAILFLAGOFF.mg.controls.g";
import { MgDisplayedColumns } from "./DETAILFLAGOFF.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-OdometerFlagOffDetail_DETAILFLAGOFF',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DETAILFLAGOFF.component.css'],
    templateUrl: './DETAILFLAGOFF.component.html'
})
export class DETAILFLAGOFF extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DETAILFLAGOFF";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DETAILFLAGOFF.x;
    }
    Y() {
        return DETAILFLAGOFF.y;
    }
    Width(): string {
        return DETAILFLAGOFF.width;
    }
    Height(): string {
        return DETAILFLAGOFF.height;
    }
    IsCenteredToWindow() {
        return DETAILFLAGOFF.isCenteredToWindow;
    }
    FormName() {
        return DETAILFLAGOFF.formName;
    }
    ShowTitleBar() {
        return DETAILFLAGOFF.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DETAILFLAGOFF.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DETAILFLAGOFF.isResizable;
    }
    IsMovable() {
        return DETAILFLAGOFF.isMovable;
    }
    override displayedColumns = this.mgdp;
}