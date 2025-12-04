import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Confirmation.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO066_PDIOFF_ENTRY_Confirmation_Confirmation',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./Confirmation.component.css'],
    templateUrl: './Confirmation.component.html'
})
export class Confirmation extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Confirmation";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "560px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return Confirmation.x;
    }
    Y() {
        return Confirmation.y;
    }
    Width(): string {
        return Confirmation.width;
    }
    Height(): string {
        return Confirmation.height;
    }
    IsCenteredToWindow() {
        return Confirmation.isCenteredToWindow;
    }
    FormName() {
        return Confirmation.formName;
    }
    ShowTitleBar() {
        return Confirmation.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Confirmation.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Confirmation.isResizable;
    }
    IsMovable() {
        return Confirmation.isMovable;
    }
}