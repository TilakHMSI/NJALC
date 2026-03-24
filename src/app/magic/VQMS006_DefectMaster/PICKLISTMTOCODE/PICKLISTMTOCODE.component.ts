import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PICKLISTMTOCODE.mg.controls.g";
import { MgDisplayedColumns } from "./PICKLISTMTOCODE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS006_DefectMaster_PICKLISTMTOCODE_PICKLISTMTOCODE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PICKLISTMTOCODE.component.html'
})
export class PICKLISTMTOCODE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PICKLISTMTOCODE";
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
        return PICKLISTMTOCODE.x;
    }
    Y() {
        return PICKLISTMTOCODE.y;
    }
    Width(): string {
        return PICKLISTMTOCODE.width;
    }
    Height(): string {
        return PICKLISTMTOCODE.height;
    }
    IsCenteredToWindow() {
        return PICKLISTMTOCODE.isCenteredToWindow;
    }
    FormName() {
        return PICKLISTMTOCODE.formName;
    }
    ShowTitleBar() {
        return PICKLISTMTOCODE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PICKLISTMTOCODE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PICKLISTMTOCODE.isResizable;
    }
    IsMovable() {
        return PICKLISTMTOCODE.isMovable;
    }
    override displayedColumns = this.mgdp;
}