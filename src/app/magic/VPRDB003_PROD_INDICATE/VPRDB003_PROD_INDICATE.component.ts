import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB003_PROD_INDICATE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB003_PROD_INDICATE_VPRDB003_PROD_INDICATE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB003_PROD_INDICATE.component.html'
})
export class VPRDB003_PROD_INDICATE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB003_PROD_INDICATE";
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
        return VPRDB003_PROD_INDICATE.x;
    }
    Y() {
        return VPRDB003_PROD_INDICATE.y;
    }
    Width(): string {
        return VPRDB003_PROD_INDICATE.width;
    }
    Height(): string {
        return VPRDB003_PROD_INDICATE.height;
    }
    IsCenteredToWindow() {
        return VPRDB003_PROD_INDICATE.isCenteredToWindow;
    }
    FormName() {
        return VPRDB003_PROD_INDICATE.formName;
    }
    ShowTitleBar() {
        return VPRDB003_PROD_INDICATE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB003_PROD_INDICATE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB003_PROD_INDICATE.isResizable;
    }
    IsMovable() {
        return VPRDB003_PROD_INDICATE.isMovable;
    }
}