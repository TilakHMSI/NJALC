import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOR_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO019_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD002_MAITENANCE_COLOR_CM_COLOR_CM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLOR_CM.component.html'
})
export class COLOR_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLOR_CM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "900px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return COLOR_CM.x;
    }
    Y() {
        return COLOR_CM.y;
    }
    Width(): string {
        return COLOR_CM.width;
    }
    Height(): string {
        return COLOR_CM.height;
    }
    IsCenteredToWindow() {
        return COLOR_CM.isCenteredToWindow;
    }
    FormName() {
        return COLOR_CM.formName;
    }
    ShowTitleBar() {
        return COLOR_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLOR_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLOR_CM.isResizable;
    }
    IsMovable() {
        return COLOR_CM.isMovable;
    }
}