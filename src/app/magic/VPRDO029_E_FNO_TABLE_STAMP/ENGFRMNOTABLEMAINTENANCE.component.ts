import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGFRMNOTABLEMAINTENANCE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO029_E_FNO_TABLE_STAMP_ENGFRMNOTABLEMAINTENANCE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ENGFRMNOTABLEMAINTENANCE.component.html'
})
export class ENGFRMNOTABLEMAINTENANCE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGFRMNOTABLEMAINTENANCE_";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "650px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ENGFRMNOTABLEMAINTENANCE.x;
    }
    Y() {
        return ENGFRMNOTABLEMAINTENANCE.y;
    }
    Width(): string {
        return ENGFRMNOTABLEMAINTENANCE.width;
    }
    Height(): string {
        return ENGFRMNOTABLEMAINTENANCE.height;
    }
    IsCenteredToWindow() {
        return ENGFRMNOTABLEMAINTENANCE.isCenteredToWindow;
    }
    FormName() {
        return ENGFRMNOTABLEMAINTENANCE.formName;
    }
    ShowTitleBar() {
        return ENGFRMNOTABLEMAINTENANCE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGFRMNOTABLEMAINTENANCE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGFRMNOTABLEMAINTENANCE.isResizable;
    }
    IsMovable() {
        return ENGFRMNOTABLEMAINTENANCE.isMovable;
    }
}