import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MissingNumbers.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7613MISSING_ENG_FRM160_MissingNumbers',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MissingNumbers.component.html'
})
export class MissingNumbers extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MissingNumbers";
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
        return MissingNumbers.x;
    }
    Y() {
        return MissingNumbers.y;
    }
    Width(): string {
        return MissingNumbers.width;
    }
    Height(): string {
        return MissingNumbers.height;
    }
    IsCenteredToWindow() {
        return MissingNumbers.isCenteredToWindow;
    }
    FormName() {
        return MissingNumbers.formName;
    }
    ShowTitleBar() {
        return MissingNumbers.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MissingNumbers.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MissingNumbers.isResizable;
    }
    IsMovable() {
        return MissingNumbers.isMovable;
    }
}