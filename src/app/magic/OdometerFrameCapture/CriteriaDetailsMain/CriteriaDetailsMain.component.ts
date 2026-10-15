import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CriteriaDetailsMain.mg.controls.g";
import { MgDisplayedColumns } from "./CriteriaDetailsMain.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-OdometerFrameCapture_CriteriaDetailsMain_CriteriaDetailsMain',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CriteriaDetails.component.css'],
    templateUrl: './CriteriaDetailsMain.component.html'
})
export class CriteriaDetailsMain extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CriteriaDetailsMain";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1050px";
    private static readonly height: string = "630px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CriteriaDetailsMain.x;
    }
    Y() {
        return CriteriaDetailsMain.y;
    }
    Width(): string {
        return CriteriaDetailsMain.width;
    }
    Height(): string {
        return CriteriaDetailsMain.height;
    }
    IsCenteredToWindow() {
        return CriteriaDetailsMain.isCenteredToWindow;
    }
    FormName() {
        return CriteriaDetailsMain.formName;
    }
    ShowTitleBar() {
        return CriteriaDetailsMain.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CriteriaDetailsMain.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CriteriaDetailsMain.isResizable;
    }
    IsMovable() {
        return CriteriaDetailsMain.isMovable;
    }
    override displayedColumns = this.mgdp;
}