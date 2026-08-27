import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./OdometerCriteriaMaster.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-OdometerCriteriaMaster_OdometerCriteriaMaster',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './OdometerCriteriaMaster.component.html'
})
export class OdometerCriteriaMaster extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "OdometerCriteriaMaster";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return OdometerCriteriaMaster.x;
    }
    Y() {
        return OdometerCriteriaMaster.y;
    }
    Width(): string {
        return OdometerCriteriaMaster.width;
    }
    Height(): string {
        return OdometerCriteriaMaster.height;
    }
    IsCenteredToWindow() {
        return OdometerCriteriaMaster.isCenteredToWindow;
    }
    FormName() {
        return OdometerCriteriaMaster.formName;
    }
    ShowTitleBar() {
        return OdometerCriteriaMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return OdometerCriteriaMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return OdometerCriteriaMaster.isResizable;
    }
    IsMovable() {
        return OdometerCriteriaMaster.isMovable;
    }
}