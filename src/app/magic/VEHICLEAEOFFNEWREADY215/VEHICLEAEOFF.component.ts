import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VEHICLEAEOFF.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VEHICLEAEOFFNEWREADY215_VEHICLEAEOFF',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VEHICLEAEOFF.component.html'
})
export class VEHICLEAEOFF extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VEHICLEAEOFF";
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
        return VEHICLEAEOFF.x;
    }
    Y() {
        return VEHICLEAEOFF.y;
    }
    Width(): string {
        return VEHICLEAEOFF.width;
    }
    Height(): string {
        return VEHICLEAEOFF.height;
    }
    IsCenteredToWindow() {
        return VEHICLEAEOFF.isCenteredToWindow;
    }
    FormName() {
        return VEHICLEAEOFF.formName;
    }
    ShowTitleBar() {
        return VEHICLEAEOFF.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VEHICLEAEOFF.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VEHICLEAEOFF.isResizable;
    }
    IsMovable() {
        return VEHICLEAEOFF.isMovable;
    }
}