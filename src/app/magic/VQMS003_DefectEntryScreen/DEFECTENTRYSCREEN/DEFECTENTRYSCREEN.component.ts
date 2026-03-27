import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DEFECTENTRYSCREEN.mg.controls.g";
import { MgDisplayedColumns } from "./DEFECTENTRYSCREEN.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS003_DefectEntryScreen_DEFECTENTRYSCREEN_DEFECTENTRYSCREEN',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrl: './DEFECTENTRYSCREEN.component.css',
    templateUrl: './DEFECTENTRYSCREEN.component.html'
})
export class DEFECTENTRYSCREEN extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DEFECTENTRYSCREEN";
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
        return DEFECTENTRYSCREEN.x;
    }
    Y() {
        return DEFECTENTRYSCREEN.y;
    }
    Width(): string {
        return DEFECTENTRYSCREEN.width;
    }
    Height(): string {
        return DEFECTENTRYSCREEN.height;
    }
    IsCenteredToWindow() {
        return DEFECTENTRYSCREEN.isCenteredToWindow;
    }
    FormName() {
        return DEFECTENTRYSCREEN.formName;
    }
    ShowTitleBar() {
        return DEFECTENTRYSCREEN.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DEFECTENTRYSCREEN.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DEFECTENTRYSCREEN.isResizable;
    }
    IsMovable() {
        return DEFECTENTRYSCREEN.isMovable;
    }
    override displayedColumns = this.mgdp;
}