import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ViewMemory.mg.controls.g";
import { MgDisplayedColumns } from "./ViewMemory.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO181_MONTHLY_SCHD_ENTRY_MODE_GET_ViewMemory_ViewMemory',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrl: './ViewMemory.component.css',
    templateUrl: './ViewMemory.component.html'
})
export class ViewMemory extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ViewMemory";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1000px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ViewMemory.x;
    }
    Y() {
        return ViewMemory.y;
    }
    Width(): string {
        return ViewMemory.width;
    }
    Height(): string {
        return ViewMemory.height;
    }
    IsCenteredToWindow() {
        return ViewMemory.isCenteredToWindow;
    }
    FormName() {
        return ViewMemory.formName;
    }
    ShowTitleBar() {
        return ViewMemory.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ViewMemory.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ViewMemory.isResizable;
    }
    IsMovable() {
        return ViewMemory.isMovable;
    }
    override displayedColumns = this.mgdp;
}