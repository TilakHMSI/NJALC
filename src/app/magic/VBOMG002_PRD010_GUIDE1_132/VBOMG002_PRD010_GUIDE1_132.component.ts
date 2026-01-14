import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VBOMG002_PRD010_GUIDE1_132.mg.controls.g";
import { MgDisplayedColumns } from "./VBOMG002_PRD010_GUIDE1_132.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VBOMG002_PRD010_GUIDE1_132_VBOMG002_PRD010_GUIDE1_132',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VBOMG002_PRD010_GUIDE1_132.component.html'
})
export class VBOMG002_PRD010_GUIDE1_132 extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VBOMG002_PRD010_GUIDE1_132";
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
        return VBOMG002_PRD010_GUIDE1_132.x;
    }
    Y() {
        return VBOMG002_PRD010_GUIDE1_132.y;
    }
    Width(): string {
        return VBOMG002_PRD010_GUIDE1_132.width;
    }
    Height(): string {
        return VBOMG002_PRD010_GUIDE1_132.height;
    }
    IsCenteredToWindow() {
        return VBOMG002_PRD010_GUIDE1_132.isCenteredToWindow;
    }
    FormName() {
        return VBOMG002_PRD010_GUIDE1_132.formName;
    }
    ShowTitleBar() {
        return VBOMG002_PRD010_GUIDE1_132.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VBOMG002_PRD010_GUIDE1_132.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VBOMG002_PRD010_GUIDE1_132.isResizable;
    }
    IsMovable() {
        return VBOMG002_PRD010_GUIDE1_132.isMovable;
    }
    override displayedColumns = this.mgdp;
}