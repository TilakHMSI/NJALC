import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./IVIOFFRESULTENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EVPRG2_IVI_OFF_ENTRY_IVIOFFRESULTENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './IVIOFFRESULTENTRY.component.html'
})
export class IVIOFFRESULTENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "IVIOFFRESULTENTRY";
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
        return IVIOFFRESULTENTRY.x;
    }
    Y() {
        return IVIOFFRESULTENTRY.y;
    }
    Width(): string {
        return IVIOFFRESULTENTRY.width;
    }
    Height(): string {
        return IVIOFFRESULTENTRY.height;
    }
    IsCenteredToWindow() {
        return IVIOFFRESULTENTRY.isCenteredToWindow;
    }
    FormName() {
        return IVIOFFRESULTENTRY.formName;
    }
    ShowTitleBar() {
        return IVIOFFRESULTENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return IVIOFFRESULTENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return IVIOFFRESULTENTRY.isResizable;
    }
    IsMovable() {
        return IVIOFFRESULTENTRY.isMovable;
    }
}