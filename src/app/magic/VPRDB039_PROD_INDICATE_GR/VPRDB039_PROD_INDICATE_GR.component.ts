import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB039_PROD_INDICATE_GR.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB039_PROD_INDICATE_GR_VPRDB039_PROD_INDICATE_GR',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB039_PROD_INDICATE_GR.component.html'
})
export class VPRDB039_PROD_INDICATE_GR extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB039_PROD_INDICATE_GR";
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
        return VPRDB039_PROD_INDICATE_GR.x;
    }
    Y() {
        return VPRDB039_PROD_INDICATE_GR.y;
    }
    Width(): string {
        return VPRDB039_PROD_INDICATE_GR.width;
    }
    Height(): string {
        return VPRDB039_PROD_INDICATE_GR.height;
    }
    IsCenteredToWindow() {
        return VPRDB039_PROD_INDICATE_GR.isCenteredToWindow;
    }
    FormName() {
        return VPRDB039_PROD_INDICATE_GR.formName;
    }
    ShowTitleBar() {
        return VPRDB039_PROD_INDICATE_GR.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB039_PROD_INDICATE_GR.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB039_PROD_INDICATE_GR.isResizable;
    }
    IsMovable() {
        return VPRDB039_PROD_INDICATE_GR.isMovable;
    }
}