import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SALESSYSTEMINTERFACE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB050SHIPPEDFNOTXTOUT100_SALESSYSTEMINTERFACE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SALESSYSTEMINTERFACE.component.html'
})
export class SALESSYSTEMINTERFACE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SALESSYSTEMINTERFACE";
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
        return SALESSYSTEMINTERFACE.x;
    }
    Y() {
        return SALESSYSTEMINTERFACE.y;
    }
    Width(): string {
        return SALESSYSTEMINTERFACE.width;
    }
    Height(): string {
        return SALESSYSTEMINTERFACE.height;
    }
    IsCenteredToWindow() {
        return SALESSYSTEMINTERFACE.isCenteredToWindow;
    }
    FormName() {
        return SALESSYSTEMINTERFACE.formName;
    }
    ShowTitleBar() {
        return SALESSYSTEMINTERFACE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SALESSYSTEMINTERFACE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SALESSYSTEMINTERFACE.isResizable;
    }
    IsMovable() {
        return SALESSYSTEMINTERFACE.isMovable;
    }
}