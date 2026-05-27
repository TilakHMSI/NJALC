import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGFRMNOTABLEMAINTENANCE_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO029_E_FNO_TABLE_STAMP_CHASISNOTBLMAINTE_CM_ENGFRMNOTABLEMAINTENANCE_CM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ENGFRMNOTABLEMAINTENANCE_CM.component.html'
})
export class ENGFRMNOTABLEMAINTENANCE_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGFRMNOTABLEMAINTENANCE_CM";
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
        return ENGFRMNOTABLEMAINTENANCE_CM.x;
    }
    Y() {
        return ENGFRMNOTABLEMAINTENANCE_CM.y;
    }
    Width(): string {
        return ENGFRMNOTABLEMAINTENANCE_CM.width;
    }
    Height(): string {
        return ENGFRMNOTABLEMAINTENANCE_CM.height;
    }
    IsCenteredToWindow() {
        return ENGFRMNOTABLEMAINTENANCE_CM.isCenteredToWindow;
    }
    FormName() {
        return ENGFRMNOTABLEMAINTENANCE_CM.formName;
    }
    ShowTitleBar() {
        return ENGFRMNOTABLEMAINTENANCE_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGFRMNOTABLEMAINTENANCE_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGFRMNOTABLEMAINTENANCE_CM.isResizable;
    }
    IsMovable() {
        return ENGFRMNOTABLEMAINTENANCE_CM.isMovable;
    }
}