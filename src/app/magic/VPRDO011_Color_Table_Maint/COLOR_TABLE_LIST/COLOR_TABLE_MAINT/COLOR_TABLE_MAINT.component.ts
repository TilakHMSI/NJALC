import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOR_TABLE_MAINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO011_Color_Table_Maint_COLOR_TABLE_LIST_COLOR_TABLE_MAINT_COLOR_TABLE_MAINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLOR_TABLE_MAINT.component.html'
})
export class COLOR_TABLE_MAINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLOR TABLE MAINTENANCE : CM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "900px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return COLOR_TABLE_MAINT.x;
    }
    Y() {
        return COLOR_TABLE_MAINT.y;
    }
    Width(): string {
        return COLOR_TABLE_MAINT.width;
    }
    Height(): string {
        return COLOR_TABLE_MAINT.height;
    }
    IsCenteredToWindow() {
        return COLOR_TABLE_MAINT.isCenteredToWindow;
    }
    FormName() {
        return COLOR_TABLE_MAINT.formName;
    }
    ShowTitleBar() {
        return COLOR_TABLE_MAINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLOR_TABLE_MAINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLOR_TABLE_MAINT.isResizable;
    }
    IsMovable() {
        return COLOR_TABLE_MAINT.isMovable;
    }
}