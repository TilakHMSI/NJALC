import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PrintScreen.mg.controls.g";
import { MgDisplayedColumns } from "./PrintScreen.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PrintScreen_PrintScreen',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PrintScreen.component.html'
})
export class PrintScreen extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PrintScreen";
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
        return PrintScreen.x;
    }
    Y() {
        return PrintScreen.y;
    }
    Width(): string {
        return PrintScreen.width;
    }
    Height(): string {
        return PrintScreen.height;
    }
    IsCenteredToWindow() {
        return PrintScreen.isCenteredToWindow;
    }
    FormName() {
        return PrintScreen.formName;
    }
    ShowTitleBar() {
        return PrintScreen.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PrintScreen.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PrintScreen.isResizable;
    }
    IsMovable() {
        return PrintScreen.isMovable;
    }
    override displayedColumns = this.mgdp;
}