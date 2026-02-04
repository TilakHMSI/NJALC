import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MODEL_PICKLIST.mg.controls.g";
import { MgDisplayedColumns } from "./MODEL_PICKLIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EV_MODEL_MASTER_Details_MODEL_PICKLIST_MODEL_PICKLIST',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './MODEL_PICKLIST.component.html'
})
export class MODEL_PICKLIST extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MODEL_PICKLIST";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "490px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return MODEL_PICKLIST.x;
    }
    Y() {
        return MODEL_PICKLIST.y;
    }
    Width(): string {
        return MODEL_PICKLIST.width;
    }
    Height(): string {
        return MODEL_PICKLIST.height;
    }
    IsCenteredToWindow() {
        return MODEL_PICKLIST.isCenteredToWindow;
    }
    FormName() {
        return MODEL_PICKLIST.formName;
    }
    ShowTitleBar() {
        return MODEL_PICKLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MODEL_PICKLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MODEL_PICKLIST.isResizable;
    }
    IsMovable() {
        return MODEL_PICKLIST.isMovable;
    }
    override displayedColumns = this.mgdp;
}