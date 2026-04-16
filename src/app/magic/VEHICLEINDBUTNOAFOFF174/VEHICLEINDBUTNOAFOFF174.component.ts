import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VEHICLEINDBUTNOAFOFF174.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VEHICLEINDBUTNOAFOFF174_VEHICLEINDBUTNOAFOFF174',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VEHICLEINDBUTNOAFOFF174.component.html'
})
export class VEHICLEINDBUTNOAFOFF174 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VEHICLEINDBUTNOAFOFF174";
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
        return VEHICLEINDBUTNOAFOFF174.x;
    }
    Y() {
        return VEHICLEINDBUTNOAFOFF174.y;
    }
    Width(): string {
        return VEHICLEINDBUTNOAFOFF174.width;
    }
    Height(): string {
        return VEHICLEINDBUTNOAFOFF174.height;
    }
    IsCenteredToWindow() {
        return VEHICLEINDBUTNOAFOFF174.isCenteredToWindow;
    }
    FormName() {
        return VEHICLEINDBUTNOAFOFF174.formName;
    }
    ShowTitleBar() {
        return VEHICLEINDBUTNOAFOFF174.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VEHICLEINDBUTNOAFOFF174.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VEHICLEINDBUTNOAFOFF174.isResizable;
    }
    IsMovable() {
        return VEHICLEINDBUTNOAFOFF174.isMovable;
    }
}