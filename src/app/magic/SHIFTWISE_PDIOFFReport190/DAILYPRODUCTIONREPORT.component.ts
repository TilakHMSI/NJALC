import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DAILYPRODUCTIONREPORT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SHIFTWISE_PDIOFFReport190_DAILYPRODUCTIONREPORT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DAILYPRODUCTIONREPORT.component.html'
})
export class DAILYPRODUCTIONREPORT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DAILYPRODUCTIONREPORT";
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
        return DAILYPRODUCTIONREPORT.x;
    }
    Y() {
        return DAILYPRODUCTIONREPORT.y;
    }
    Width(): string {
        return DAILYPRODUCTIONREPORT.width;
    }
    Height(): string {
        return DAILYPRODUCTIONREPORT.height;
    }
    IsCenteredToWindow() {
        return DAILYPRODUCTIONREPORT.isCenteredToWindow;
    }
    FormName() {
        return DAILYPRODUCTIONREPORT.formName;
    }
    ShowTitleBar() {
        return DAILYPRODUCTIONREPORT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DAILYPRODUCTIONREPORT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DAILYPRODUCTIONREPORT.isResizable;
    }
    IsMovable() {
        return DAILYPRODUCTIONREPORT.isMovable;
    }
}