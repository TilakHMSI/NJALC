import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CHARGEROFFRESULTENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EVPRG7_CHARGER_SCANNING_ENTRY_CHARGEROFFRESULTENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CHARGEROFFRESULTENTRY.component.html'
})
export class CHARGEROFFRESULTENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CHARGEROFFRESULTENTRY";
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
        return CHARGEROFFRESULTENTRY.x;
    }
    Y() {
        return CHARGEROFFRESULTENTRY.y;
    }
    Width(): string {
        return CHARGEROFFRESULTENTRY.width;
    }
    Height(): string {
        return CHARGEROFFRESULTENTRY.height;
    }
    IsCenteredToWindow() {
        return CHARGEROFFRESULTENTRY.isCenteredToWindow;
    }
    FormName() {
        return CHARGEROFFRESULTENTRY.formName;
    }
    ShowTitleBar() {
        return CHARGEROFFRESULTENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CHARGEROFFRESULTENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CHARGEROFFRESULTENTRY.isResizable;
    }
    IsMovable() {
        return CHARGEROFFRESULTENTRY.isMovable;
    }
}