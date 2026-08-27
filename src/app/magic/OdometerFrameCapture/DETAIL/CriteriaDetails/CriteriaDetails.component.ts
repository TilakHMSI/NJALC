import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CriteriaDetails.mg.controls.g";
import { MgDisplayedColumns } from "./CriteriaDetails.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-OdometerFrameCapture_DETAIL_CriteriaDetails_CriteriaDetails',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CriteriaDetails.component.css'],
    templateUrl: './CriteriaDetails.component.html'
})
export class CriteriaDetails extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CriteriaDetails";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1050px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CriteriaDetails.x;
    }
    Y() {
        return CriteriaDetails.y;
    }
    Width(): string {
        return CriteriaDetails.width;
    }
    Height(): string {
        return CriteriaDetails.height;
    }
    IsCenteredToWindow() {
        return CriteriaDetails.isCenteredToWindow;
    }
    FormName() {
        return CriteriaDetails.formName;
    }
    ShowTitleBar() {
        return CriteriaDetails.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CriteriaDetails.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CriteriaDetails.isResizable;
    }
    IsMovable() {
        return CriteriaDetails.isMovable;
    }
    override displayedColumns = this.mgdp;
}