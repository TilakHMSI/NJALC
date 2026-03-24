import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PasstypeCorrectionScreen.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS012_PassCorrectionEntry_PasstypeCorrectionScreen',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PasstypeCorrectionScreen.component.html'
})
export class PasstypeCorrectionScreen extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PasstypeCorrectionScreen";
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
        return PasstypeCorrectionScreen.x;
    }
    Y() {
        return PasstypeCorrectionScreen.y;
    }
    Width(): string {
        return PasstypeCorrectionScreen.width;
    }
    Height(): string {
        return PasstypeCorrectionScreen.height;
    }
    IsCenteredToWindow() {
        return PasstypeCorrectionScreen.isCenteredToWindow;
    }
    FormName() {
        return PasstypeCorrectionScreen.formName;
    }
    ShowTitleBar() {
        return PasstypeCorrectionScreen.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PasstypeCorrectionScreen.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PasstypeCorrectionScreen.isResizable;
    }
    IsMovable() {
        return PasstypeCorrectionScreen.isMovable;
    }
}