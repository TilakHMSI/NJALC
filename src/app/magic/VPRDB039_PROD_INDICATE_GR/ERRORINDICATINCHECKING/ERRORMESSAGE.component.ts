import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ERRORMESSAGE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB039_PROD_INDICATE_GR_ERRORINDICATINCHECKING_ERRORMESSAGE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ERRORMESSAGE.component.html'
})
export class ERRORMESSAGE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ERRORMESSAGE";
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
        return ERRORMESSAGE.x;
    }
    Y() {
        return ERRORMESSAGE.y;
    }
    Width(): string {
        return ERRORMESSAGE.width;
    }
    Height(): string {
        return ERRORMESSAGE.height;
    }
    IsCenteredToWindow() {
        return ERRORMESSAGE.isCenteredToWindow;
    }
    FormName() {
        return ERRORMESSAGE.formName;
    }
    ShowTitleBar() {
        return ERRORMESSAGE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ERRORMESSAGE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ERRORMESSAGE.isResizable;
    }
    IsMovable() {
        return ERRORMESSAGE.isMovable;
    }
}