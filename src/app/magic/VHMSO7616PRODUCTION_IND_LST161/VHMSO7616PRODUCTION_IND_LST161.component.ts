import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VHMSO7616PRODUCTION_IND_LST161.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7616PRODUCTION_IND_LST161_VHMSO7616PRODUCTION_IND_LST161',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VHMSO7616PRODUCTION_IND_LST161.component.html'
})
export class VHMSO7616PRODUCTION_IND_LST161 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VHMSO7616PRODUCTION_IND_LST161";
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
        return VHMSO7616PRODUCTION_IND_LST161.x;
    }
    Y() {
        return VHMSO7616PRODUCTION_IND_LST161.y;
    }
    Width(): string {
        return VHMSO7616PRODUCTION_IND_LST161.width;
    }
    Height(): string {
        return VHMSO7616PRODUCTION_IND_LST161.height;
    }
    IsCenteredToWindow() {
        return VHMSO7616PRODUCTION_IND_LST161.isCenteredToWindow;
    }
    FormName() {
        return VHMSO7616PRODUCTION_IND_LST161.formName;
    }
    ShowTitleBar() {
        return VHMSO7616PRODUCTION_IND_LST161.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VHMSO7616PRODUCTION_IND_LST161.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VHMSO7616PRODUCTION_IND_LST161.isResizable;
    }
    IsMovable() {
        return VHMSO7616PRODUCTION_IND_LST161.isMovable;
    }
}