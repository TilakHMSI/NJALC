import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./HOURLYPRODUCTIONMONITORING180.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-HOURLYPRODUCTIONMONITORING180_HOURLYPRODUCTIONMONITORING180',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './HOURLYPRODUCTIONMONITORING180.component.html'
})
export class HOURLYPRODUCTIONMONITORING180 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "HOURLYPRODUCTIONMONITORING180";
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
        return HOURLYPRODUCTIONMONITORING180.x;
    }
    Y() {
        return HOURLYPRODUCTIONMONITORING180.y;
    }
    Width(): string {
        return HOURLYPRODUCTIONMONITORING180.width;
    }
    Height(): string {
        return HOURLYPRODUCTIONMONITORING180.height;
    }
    IsCenteredToWindow() {
        return HOURLYPRODUCTIONMONITORING180.isCenteredToWindow;
    }
    FormName() {
        return HOURLYPRODUCTIONMONITORING180.formName;
    }
    ShowTitleBar() {
        return HOURLYPRODUCTIONMONITORING180.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return HOURLYPRODUCTIONMONITORING180.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return HOURLYPRODUCTIONMONITORING180.isResizable;
    }
    IsMovable() {
        return HOURLYPRODUCTIONMONITORING180.isMovable;
    }
}