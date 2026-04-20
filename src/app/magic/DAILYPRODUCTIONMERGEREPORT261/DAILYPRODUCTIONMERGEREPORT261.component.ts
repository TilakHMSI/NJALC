import { Component } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DAILYPRODUCTIONMERGEREPORT261.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DAILYPRODUCTIONMERGEREPORT261_DAILYPRODUCTIONMERGEREPORT261',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DAILYPRODUCTIONMERGEREPORT261.component.html'
})
export class DAILYPRODUCTIONMERGEREPORT261 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DAILYPRODUCTIONMERGEREPORT261";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DAILYPRODUCTIONMERGEREPORT261.x;
    }
    Y() {
        return DAILYPRODUCTIONMERGEREPORT261.y;
    }
    Width(): string {
        return DAILYPRODUCTIONMERGEREPORT261.width;
    }
    Height(): string {
        return DAILYPRODUCTIONMERGEREPORT261.height;
    }
    IsCenteredToWindow() {
        return DAILYPRODUCTIONMERGEREPORT261.isCenteredToWindow;
    }
    FormName() {
        return DAILYPRODUCTIONMERGEREPORT261.formName;
    }
    ShowTitleBar() {
        return DAILYPRODUCTIONMERGEREPORT261.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DAILYPRODUCTIONMERGEREPORT261.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DAILYPRODUCTIONMERGEREPORT261.isResizable;
    }
    IsMovable() {
        return DAILYPRODUCTIONMERGEREPORT261.isMovable;
    }
  
}