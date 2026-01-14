import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOR_TABLE_MAINTENANCE_HSC.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO016_Color_Table_MTN_HSC_COLOR_TABLE_MAINTENANCE_HSC',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLOR_TABLE_MAINTENANCE_HSC.component.html'
})
export class COLOR_TABLE_MAINTENANCE_HSC extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLOR_TABLE_MAINTENANCE_HSC";
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
        return COLOR_TABLE_MAINTENANCE_HSC.x;
    }
    Y() {
        return COLOR_TABLE_MAINTENANCE_HSC.y;
    }
    Width(): string {
        return COLOR_TABLE_MAINTENANCE_HSC.width;
    }
    Height(): string {
        return COLOR_TABLE_MAINTENANCE_HSC.height;
    }
    IsCenteredToWindow() {
        return COLOR_TABLE_MAINTENANCE_HSC.isCenteredToWindow;
    }
    FormName() {
        return COLOR_TABLE_MAINTENANCE_HSC.formName;
    }
    ShowTitleBar() {
        return COLOR_TABLE_MAINTENANCE_HSC.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLOR_TABLE_MAINTENANCE_HSC.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLOR_TABLE_MAINTENANCE_HSC.isResizable;
    }
    IsMovable() {
        return COLOR_TABLE_MAINTENANCE_HSC.isMovable;
    }
}