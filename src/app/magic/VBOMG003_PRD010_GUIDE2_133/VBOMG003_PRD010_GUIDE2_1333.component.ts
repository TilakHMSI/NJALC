import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VBOMG003_PRD010_GUIDE2_1333.mg.controls.g";
import { MgDisplayedColumns } from "./VBOMG003_PRD010_GUIDE2_1333.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VBOMG003_PRD010_GUIDE2_133_VBOMG003_PRD010_GUIDE2_1333',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VBOMG003_PRD010_GUIDE2_1333.component.html'
})
export class VBOMG003_PRD010_GUIDE2_1333 extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VBOMG003_PRD010_GUIDE2_1333";
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
        return VBOMG003_PRD010_GUIDE2_1333.x;
    }
    Y() {
        return VBOMG003_PRD010_GUIDE2_1333.y;
    }
    Width(): string {
        return VBOMG003_PRD010_GUIDE2_1333.width;
    }
    Height(): string {
        return VBOMG003_PRD010_GUIDE2_1333.height;
    }
    IsCenteredToWindow() {
        return VBOMG003_PRD010_GUIDE2_1333.isCenteredToWindow;
    }
    FormName() {
        return VBOMG003_PRD010_GUIDE2_1333.formName;
    }
    ShowTitleBar() {
        return VBOMG003_PRD010_GUIDE2_1333.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VBOMG003_PRD010_GUIDE2_1333.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VBOMG003_PRD010_GUIDE2_1333.isResizable;
    }
    IsMovable() {
        return VBOMG003_PRD010_GUIDE2_1333.isMovable;
    }
    override displayedColumns = this.mgdp;
}