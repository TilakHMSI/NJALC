import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GPSOFFRESULTENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EVPRG3_GPS_OFF_ENTRY_GPSOFFRESULTENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './GPSOFFRESULTENTRY.component.html'
})
export class GPSOFFRESULTENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GPSOFFRESULTENTRY";
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
        return GPSOFFRESULTENTRY.x;
    }
    Y() {
        return GPSOFFRESULTENTRY.y;
    }
    Width(): string {
        return GPSOFFRESULTENTRY.width;
    }
    Height(): string {
        return GPSOFFRESULTENTRY.height;
    }
    IsCenteredToWindow() {
        return GPSOFFRESULTENTRY.isCenteredToWindow;
    }
    FormName() {
        return GPSOFFRESULTENTRY.formName;
    }
    ShowTitleBar() {
        return GPSOFFRESULTENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GPSOFFRESULTENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GPSOFFRESULTENTRY.isResizable;
    }
    IsMovable() {
        return GPSOFFRESULTENTRY.isMovable;
    }
}