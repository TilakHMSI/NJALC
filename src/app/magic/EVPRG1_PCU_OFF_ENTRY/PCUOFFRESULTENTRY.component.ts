import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PCUOFFRESULTENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EVPRG1_PCU_OFF_ENTRY_PCUOFFRESULTENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PCUOFFRESULTENTRY.component.html'
})
export class PCUOFFRESULTENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PCUOFFRESULTENTRY";
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
        return PCUOFFRESULTENTRY.x;
    }
    Y() {
        return PCUOFFRESULTENTRY.y;
    }
    Width(): string {
        return PCUOFFRESULTENTRY.width;
    }
    Height(): string {
        return PCUOFFRESULTENTRY.height;
    }
    IsCenteredToWindow() {
        return PCUOFFRESULTENTRY.isCenteredToWindow;
    }
    FormName() {
        return PCUOFFRESULTENTRY.formName;
    }
    ShowTitleBar() {
        return PCUOFFRESULTENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PCUOFFRESULTENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PCUOFFRESULTENTRY.isResizable;
    }
    IsMovable() {
        return PCUOFFRESULTENTRY.isMovable;
    }
}