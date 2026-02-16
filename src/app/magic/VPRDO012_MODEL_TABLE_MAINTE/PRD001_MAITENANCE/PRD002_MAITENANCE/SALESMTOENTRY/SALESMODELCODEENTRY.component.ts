import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SALESMODELCODEENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO012_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD002_MAITENANCE_SALESMTOENTRY_SALESMODELCODEENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SALESMODELCODEENTRY.component.html'
})
export class SALESMODELCODEENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SALESMODELCODEENTRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SALESMODELCODEENTRY.x;
    }
    Y() {
        return SALESMODELCODEENTRY.y;
    }
    Width(): string {
        return SALESMODELCODEENTRY.width;
    }
    Height(): string {
        return SALESMODELCODEENTRY.height;
    }
    IsCenteredToWindow() {
        return SALESMODELCODEENTRY.isCenteredToWindow;
    }
    FormName() {
        return SALESMODELCODEENTRY.formName;
    }
    ShowTitleBar() {
        return SALESMODELCODEENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SALESMODELCODEENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SALESMODELCODEENTRY.isResizable;
    }
    IsMovable() {
        return SALESMODELCODEENTRY.isMovable;
    }
}