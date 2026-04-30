import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./STAMP_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO019_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD026_MAITENANCE_STAMP_CM_STAMP_CM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './STAMP_CM.component.html'
})
export class STAMP_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "STAMP_CM";
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
        return STAMP_CM.x;
    }
    Y() {
        return STAMP_CM.y;
    }
    Width(): string {
        return STAMP_CM.width;
    }
    Height(): string {
        return STAMP_CM.height;
    }
    IsCenteredToWindow() {
        return STAMP_CM.isCenteredToWindow;
    }
    FormName() {
        return STAMP_CM.formName;
    }
    ShowTitleBar() {
        return STAMP_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return STAMP_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return STAMP_CM.isResizable;
    }
    IsMovable() {
        return STAMP_CM.isMovable;
    }
}