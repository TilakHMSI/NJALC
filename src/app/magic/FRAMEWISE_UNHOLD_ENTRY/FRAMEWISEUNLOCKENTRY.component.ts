import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMEWISEUNLOCKENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-FRAMEWISE_UNHOLD_ENTRY_FRAMEWISEUNLOCKENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FRAMEWISEUNLOCKENTRY.component.html'
})
export class FRAMEWISEUNLOCKENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAMEWISEUNLOCKENTRY";
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
        return FRAMEWISEUNLOCKENTRY.x;
    }
    Y() {
        return FRAMEWISEUNLOCKENTRY.y;
    }
    Width(): string {
        return FRAMEWISEUNLOCKENTRY.width;
    }
    Height(): string {
        return FRAMEWISEUNLOCKENTRY.height;
    }
    IsCenteredToWindow() {
        return FRAMEWISEUNLOCKENTRY.isCenteredToWindow;
    }
    FormName() {
        return FRAMEWISEUNLOCKENTRY.formName;
    }
    ShowTitleBar() {
        return FRAMEWISEUNLOCKENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAMEWISEUNLOCKENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAMEWISEUNLOCKENTRY.isResizable;
    }
    IsMovable() {
        return FRAMEWISEUNLOCKENTRY.isMovable;
    }
}