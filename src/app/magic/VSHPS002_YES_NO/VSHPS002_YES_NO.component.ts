import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VSHPS002_YES_NO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VSHPS002_YES_NO_VSHPS002_YES_NO',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VSHPS002_YES_NO.component.html'
})
export class VSHPS002_YES_NO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VSHPS002_YES_NO";
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
        return VSHPS002_YES_NO.x;
    }
    Y() {
        return VSHPS002_YES_NO.y;
    }
    Width(): string {
        return VSHPS002_YES_NO.width;
    }
    Height(): string {
        return VSHPS002_YES_NO.height;
    }
    IsCenteredToWindow() {
        return VSHPS002_YES_NO.isCenteredToWindow;
    }
    FormName() {
        return VSHPS002_YES_NO.formName;
    }
    ShowTitleBar() {
        return VSHPS002_YES_NO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VSHPS002_YES_NO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VSHPS002_YES_NO.isResizable;
    }
    IsMovable() {
        return VSHPS002_YES_NO.isMovable;
    }
}