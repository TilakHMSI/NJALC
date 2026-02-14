import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SALESMTOCODEENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO019_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD002_MAITENANCE_SALESMTOENTRY_SALESMTOCODEENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SALESMTOCODEENTRY.component.html'
})
export class SALESMTOCODEENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SALES MTO CODE ENTRY";
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
        return SALESMTOCODEENTRY.x;
    }
    Y() {
        return SALESMTOCODEENTRY.y;
    }
    Width(): string {
        return SALESMTOCODEENTRY.width;
    }
    Height(): string {
        return SALESMTOCODEENTRY.height;
    }
    IsCenteredToWindow() {
        return SALESMTOCODEENTRY.isCenteredToWindow;
    }
    FormName() {
        return SALESMTOCODEENTRY.formName;
    }
    ShowTitleBar() {
        return SALESMTOCODEENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SALESMTOCODEENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SALESMTOCODEENTRY.isResizable;
    }
    IsMovable() {
        return SALESMTOCODEENTRY.isMovable;
    }
}