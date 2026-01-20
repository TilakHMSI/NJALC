import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOR_TABLE_MAINTENANCE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO011_Color_Table_Maint_COLOR_TABLE_MAINTENANCE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLOR_TABLE_MAINTENANCE.component.html'
})
export class COLOR_TABLE_MAINTENANCE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLOR TABLE MAINTENANCE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "675px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return COLOR_TABLE_MAINTENANCE.x;
    }
    Y() {
        return COLOR_TABLE_MAINTENANCE.y;
    }
    Width(): string {
        return COLOR_TABLE_MAINTENANCE.width;
    }
    Height(): string {
        return COLOR_TABLE_MAINTENANCE.height;
    }
    IsCenteredToWindow() {
        return COLOR_TABLE_MAINTENANCE.isCenteredToWindow;
    }
    FormName() {
        return COLOR_TABLE_MAINTENANCE.formName;
    }
    ShowTitleBar() {
        return COLOR_TABLE_MAINTENANCE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLOR_TABLE_MAINTENANCE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLOR_TABLE_MAINTENANCE.isResizable;
    }
    IsMovable() {
        return COLOR_TABLE_MAINTENANCE.isMovable;
    }
}