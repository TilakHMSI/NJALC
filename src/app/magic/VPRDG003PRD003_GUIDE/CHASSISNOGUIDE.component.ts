import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CHASSISNOGUIDE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDG003PRD003_GUIDE_CHASSISNOGUIDE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CHASSISNOGUIDE.component.html'
})
export class CHASSISNOGUIDE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CHASSISNOGUIDE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CHASSISNOGUIDE.x;
    }
    Y() {
        return CHASSISNOGUIDE.y;
    }
    Width(): string {
        return CHASSISNOGUIDE.width;
    }
    Height(): string {
        return CHASSISNOGUIDE.height;
    }
    IsCenteredToWindow() {
        return CHASSISNOGUIDE.isCenteredToWindow;
    }
    FormName() {
        return CHASSISNOGUIDE.formName;
    }
    ShowTitleBar() {
        return CHASSISNOGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CHASSISNOGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CHASSISNOGUIDE.isResizable;
    }
    IsMovable() {
        return CHASSISNOGUIDE.isMovable;
    }
}