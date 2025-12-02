import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SELECTPRD010Open.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB039_PROD_INDICATE_GR_SELECTPRD010Open_SELECTPRD010Open',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SELECTPRD010Open.component.html'
})
export class SELECTPRD010Open extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SELECTPRD010Open";
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
        return SELECTPRD010Open.x;
    }
    Y() {
        return SELECTPRD010Open.y;
    }
    Width(): string {
        return SELECTPRD010Open.width;
    }
    Height(): string {
        return SELECTPRD010Open.height;
    }
    IsCenteredToWindow() {
        return SELECTPRD010Open.isCenteredToWindow;
    }
    FormName() {
        return SELECTPRD010Open.formName;
    }
    ShowTitleBar() {
        return SELECTPRD010Open.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SELECTPRD010Open.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SELECTPRD010Open.isResizable;
    }
    IsMovable() {
        return SELECTPRD010Open.isMovable;
    }
}