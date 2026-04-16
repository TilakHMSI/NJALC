import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DAILYPRODUCTIONREPORT179.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DAILYPRODUCTIONREPORT179_DAILYPRODUCTIONREPORT179',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DAILYPRODUCTIONREPORT179.component.html'
})
export class DAILYPRODUCTIONREPORT179 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DAILYPRODUCTIONREPORT179";
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
        return DAILYPRODUCTIONREPORT179.x;
    }
    Y() {
        return DAILYPRODUCTIONREPORT179.y;
    }
    Width(): string {
        return DAILYPRODUCTIONREPORT179.width;
    }
    Height(): string {
        return DAILYPRODUCTIONREPORT179.height;
    }
    IsCenteredToWindow() {
        return DAILYPRODUCTIONREPORT179.isCenteredToWindow;
    }
    FormName() {
        return DAILYPRODUCTIONREPORT179.formName;
    }
    ShowTitleBar() {
        return DAILYPRODUCTIONREPORT179.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DAILYPRODUCTIONREPORT179.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DAILYPRODUCTIONREPORT179.isResizable;
    }
    IsMovable() {
        return DAILYPRODUCTIONREPORT179.isMovable;
    }
}