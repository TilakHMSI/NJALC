import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DEFECTSPICKLIST.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS005_DefectsPicklist_DEFECTSPICKLIST',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DEFECTSPICKLIST.component.html'
})
export class DEFECTSPICKLIST extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DEFECTSPICKLIST";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return DEFECTSPICKLIST.x;
    }
    Y() {
        return DEFECTSPICKLIST.y;
    }
    Width(): string {
        return DEFECTSPICKLIST.width;
    }
    Height(): string {
        return DEFECTSPICKLIST.height;
    }
    IsCenteredToWindow() {
        return DEFECTSPICKLIST.isCenteredToWindow;
    }
    FormName() {
        return DEFECTSPICKLIST.formName;
    }
    ShowTitleBar() {
        return DEFECTSPICKLIST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DEFECTSPICKLIST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DEFECTSPICKLIST.isResizable;
    }
    IsMovable() {
        return DEFECTSPICKLIST.isMovable;
    }
}