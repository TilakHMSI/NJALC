import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VEHICLEAFOFF175.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VEHICLEAFOFF175_VEHICLEAFOFF175',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VEHICLEAFOFF175.component.html'
})
export class VEHICLEAFOFF175 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VEHICLEAFOFF175";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VEHICLEAFOFF175.x;
    }
    Y() {
        return VEHICLEAFOFF175.y;
    }
    Width(): string {
        return VEHICLEAFOFF175.width;
    }
    Height(): string {
        return VEHICLEAFOFF175.height;
    }
    IsCenteredToWindow() {
        return VEHICLEAFOFF175.isCenteredToWindow;
    }
    FormName() {
        return VEHICLEAFOFF175.formName;
    }
    ShowTitleBar() {
        return VEHICLEAFOFF175.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VEHICLEAFOFF175.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VEHICLEAFOFF175.isResizable;
    }
    IsMovable() {
        return VEHICLEAFOFF175.isMovable;
    }
}