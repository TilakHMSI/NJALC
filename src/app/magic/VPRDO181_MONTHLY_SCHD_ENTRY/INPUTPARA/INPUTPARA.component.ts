import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./INPUTPARA.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO181_MONTHLY_SCHD_ENTRY_INPUTPARA_INPUTPARA',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './INPUTPARA.component.html'
})
export class INPUTPARA extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "INPUTPARA";
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
        return INPUTPARA.x;
    }
    Y() {
        return INPUTPARA.y;
    }
    Width(): string {
        return INPUTPARA.width;
    }
    Height(): string {
        return INPUTPARA.height;
    }
    IsCenteredToWindow() {
        return INPUTPARA.isCenteredToWindow;
    }
    FormName() {
        return INPUTPARA.formName;
    }
    ShowTitleBar() {
        return INPUTPARA.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return INPUTPARA.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return INPUTPARA.isResizable;
    }
    IsMovable() {
        return INPUTPARA.isMovable;
    }
}