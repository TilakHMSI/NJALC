import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DAILYPRODUCTIONMERGEREPORT262.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DAILYPRODUCTIONMERGEREPORT262_DAILYPRODUCTIONMERGEREPORT262',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DAILYPRODUCTIONMERGEREPORT262.component.html'
})
export class DAILYPRODUCTIONMERGEREPORT262 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DAILYPRODUCTIONMERGEREPORT262";
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
        return DAILYPRODUCTIONMERGEREPORT262.x;
    }
    Y() {
        return DAILYPRODUCTIONMERGEREPORT262.y;
    }
    Width(): string {
        return DAILYPRODUCTIONMERGEREPORT262.width;
    }
    Height(): string {
        return DAILYPRODUCTIONMERGEREPORT262.height;
    }
    IsCenteredToWindow() {
        return DAILYPRODUCTIONMERGEREPORT262.isCenteredToWindow;
    }
    FormName() {
        return DAILYPRODUCTIONMERGEREPORT262.formName;
    }
    ShowTitleBar() {
        return DAILYPRODUCTIONMERGEREPORT262.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DAILYPRODUCTIONMERGEREPORT262.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DAILYPRODUCTIONMERGEREPORT262.isResizable;
    }
    IsMovable() {
        return DAILYPRODUCTIONMERGEREPORT262.isMovable;
    }
}