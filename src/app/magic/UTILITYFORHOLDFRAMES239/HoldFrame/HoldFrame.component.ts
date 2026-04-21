import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./HoldFrame.mg.controls.g";
import { MgDisplayedColumns } from "./HoldFrame.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-UTILITYFORHOLDFRAMES239_HoldFrame_HoldFrame',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './HoldFrame.component.html'
})
export class HoldFrame extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "HoldFrame";
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
        return HoldFrame.x;
    }
    Y() {
        return HoldFrame.y;
    }
    Width(): string {
        return HoldFrame.width;
    }
    Height(): string {
        return HoldFrame.height;
    }
    IsCenteredToWindow() {
        return HoldFrame.isCenteredToWindow;
    }
    FormName() {
        return HoldFrame.formName;
    }
    ShowTitleBar() {
        return HoldFrame.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return HoldFrame.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return HoldFrame.isResizable;
    }
    IsMovable() {
        return HoldFrame.isMovable;
    }
    override displayedColumns = this.mgdp;
}