import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PLAN_TABLE_MAINTE_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO001_PLAN_TABLE_MAINTE_PLAN_TABLE_MAINTE_LIST_PLAN_TABLE_MAINTE_CM_PLAN_TABLE_MAINTE_CM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PLAN_TABLE_MAINTE_CM.component.html'
})
export class PLAN_TABLE_MAINTE_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PLAN_TABLE_MAINTE_CM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PLAN_TABLE_MAINTE_CM.x;
    }
    Y() {
        return PLAN_TABLE_MAINTE_CM.y;
    }
    Width(): string {
        return PLAN_TABLE_MAINTE_CM.width;
    }
    Height(): string {
        return PLAN_TABLE_MAINTE_CM.height;
    }
    IsCenteredToWindow() {
        return PLAN_TABLE_MAINTE_CM.isCenteredToWindow;
    }
    FormName() {
        return PLAN_TABLE_MAINTE_CM.formName;
    }
    ShowTitleBar() {
        return PLAN_TABLE_MAINTE_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PLAN_TABLE_MAINTE_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PLAN_TABLE_MAINTE_CM.isResizable;
    }
    IsMovable() {
        return PLAN_TABLE_MAINTE_CM.isMovable;
    }
}