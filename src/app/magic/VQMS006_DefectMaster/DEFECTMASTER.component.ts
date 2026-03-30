import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DEFECTMASTER.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS006_DefectMaster_DEFECTMASTER',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './DEFECTMASTER.component.css',
    templateUrl: './DEFECTMASTER.component.html'
})
export class DEFECTMASTER extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DEFECTMASTER";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "680px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DEFECTMASTER.x;
    }
    Y() {
        return DEFECTMASTER.y;
    }
    Width(): string {
        return DEFECTMASTER.width;
    }
    Height(): string {
        return DEFECTMASTER.height;
    }
    IsCenteredToWindow() {
        return DEFECTMASTER.isCenteredToWindow;
    }
    FormName() {
        return DEFECTMASTER.formName;
    }
    ShowTitleBar() {
        return DEFECTMASTER.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DEFECTMASTER.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DEFECTMASTER.isResizable;
    }
    IsMovable() {
        return DEFECTMASTER.isMovable;
    }
}