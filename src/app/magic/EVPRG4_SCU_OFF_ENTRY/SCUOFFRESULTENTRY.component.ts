import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SCUOFFRESULTENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EVPRG4_SCU_OFF_ENTRY_SCUOFFRESULTENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SCUOFFRESULTENTRY.component.html'
})
export class SCUOFFRESULTENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SCUOFFRESULTENTRY";
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
        return SCUOFFRESULTENTRY.x;
    }
    Y() {
        return SCUOFFRESULTENTRY.y;
    }
    Width(): string {
        return SCUOFFRESULTENTRY.width;
    }
    Height(): string {
        return SCUOFFRESULTENTRY.height;
    }
    IsCenteredToWindow() {
        return SCUOFFRESULTENTRY.isCenteredToWindow;
    }
    FormName() {
        return SCUOFFRESULTENTRY.formName;
    }
    ShowTitleBar() {
        return SCUOFFRESULTENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SCUOFFRESULTENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SCUOFFRESULTENTRY.isResizable;
    }
    IsMovable() {
        return SCUOFFRESULTENTRY.isMovable;
    }
}