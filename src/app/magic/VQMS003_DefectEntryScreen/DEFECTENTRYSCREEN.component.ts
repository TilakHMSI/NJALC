import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DEFECTENTRYSCREEN.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS003_DefectEntryScreen_DEFECTENTRYSCREEN',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DEFECTENTRYSCREEN.component.html'
})
export class DEFECTENTRYSCREEN extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DEFECTENTRYSCREEN";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DEFECTENTRYSCREEN.x;
    }
    Y() {
        return DEFECTENTRYSCREEN.y;
    }
    Width(): string {
        return DEFECTENTRYSCREEN.width;
    }
    Height(): string {
        return DEFECTENTRYSCREEN.height;
    }
    IsCenteredToWindow() {
        return DEFECTENTRYSCREEN.isCenteredToWindow;
    }
    FormName() {
        return DEFECTENTRYSCREEN.formName;
    }
    ShowTitleBar() {
        return DEFECTENTRYSCREEN.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DEFECTENTRYSCREEN.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DEFECTENTRYSCREEN.isResizable;
    }
    IsMovable() {
        return DEFECTENTRYSCREEN.isMovable;
    }
}