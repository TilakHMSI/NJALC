import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AEOFF_RESULT_ENTRY.mg.controls.g";
import { MgDisplayedColumns } from "./AEOFF_RESULT_ENTRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO041DISPAE_OFF_ENTRY_AEOFFRESULTENTRY_AEOFF_RESULT_ENTRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './AEOFF_RESULT_ENTRY.component.html'
})
export class AEOFF_RESULT_ENTRY extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AEOFF_RESULT_ENTRY";
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
        return AEOFF_RESULT_ENTRY.x;
    }
    Y() {
        return AEOFF_RESULT_ENTRY.y;
    }
    Width(): string {
        return AEOFF_RESULT_ENTRY.width;
    }
    Height(): string {
        return AEOFF_RESULT_ENTRY.height;
    }
    IsCenteredToWindow() {
        return AEOFF_RESULT_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return AEOFF_RESULT_ENTRY.formName;
    }
    ShowTitleBar() {
        return AEOFF_RESULT_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AEOFF_RESULT_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AEOFF_RESULT_ENTRY.isResizable;
    }
    IsMovable() {
        return AEOFF_RESULT_ENTRY.isMovable;
    }
    override displayedColumns = this.mgdp;
}