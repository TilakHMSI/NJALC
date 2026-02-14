import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MISSIONGUIDE.mg.controls.g";
import { MgDisplayedColumns } from "./MISSIONGUIDE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO019_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_MISSIONLIST_MISSIONGUIDE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './MISSIONGUIDE.component.html'
})
export class MISSIONGUIDE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MISSION GUIDE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return MISSIONGUIDE.x;
    }
    Y() {
        return MISSIONGUIDE.y;
    }
    Width(): string {
        return MISSIONGUIDE.width;
    }
    Height(): string {
        return MISSIONGUIDE.height;
    }
    IsCenteredToWindow() {
        return MISSIONGUIDE.isCenteredToWindow;
    }
    FormName() {
        return MISSIONGUIDE.formName;
    }
    ShowTitleBar() {
        return MISSIONGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MISSIONGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MISSIONGUIDE.isResizable;
    }
    IsMovable() {
        return MISSIONGUIDE.isMovable;
    }
    override displayedColumns = this.mgdp;
}