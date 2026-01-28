import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GROUP_TABLE_SELECTION.mg.controls.g";
import { MgDisplayedColumns } from "./GROUP_TABLE_SELECTION.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-GROUP_TABLE_SELECTION_GROUP_TABLE_SELECTION',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './GROUP_TABLE_SELECTION.component.html'
})
export class GROUP_TABLE_SELECTION extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GROUP TABLE SELECTION";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "450px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return GROUP_TABLE_SELECTION.x;
    }
    Y() {
        return GROUP_TABLE_SELECTION.y;
    }
    Width(): string {
        return GROUP_TABLE_SELECTION.width;
    }
    Height(): string {
        return GROUP_TABLE_SELECTION.height;
    }
    IsCenteredToWindow() {
        return GROUP_TABLE_SELECTION.isCenteredToWindow;
    }
    FormName() {
        return GROUP_TABLE_SELECTION.formName;
    }
    ShowTitleBar() {
        return GROUP_TABLE_SELECTION.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GROUP_TABLE_SELECTION.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GROUP_TABLE_SELECTION.isResizable;
    }
    IsMovable() {
        return GROUP_TABLE_SELECTION.isMovable;
    }
    override displayedColumns = this.mgdp;
}