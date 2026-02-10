import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PUMOTOROFFRESULTENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PU_OFF_RESULT_ENTRY_PUMOTOROFFRESULTENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PUMOTOROFFRESULTENTRY.component.html'
})
export class PUMOTOROFFRESULTENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PUMOTOROFFRESULTENTRY";
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
        return PUMOTOROFFRESULTENTRY.x;
    }
    Y() {
        return PUMOTOROFFRESULTENTRY.y;
    }
    Width(): string {
        return PUMOTOROFFRESULTENTRY.width;
    }
    Height(): string {
        return PUMOTOROFFRESULTENTRY.height;
    }
    IsCenteredToWindow() {
        return PUMOTOROFFRESULTENTRY.isCenteredToWindow;
    }
    FormName() {
        return PUMOTOROFFRESULTENTRY.formName;
    }
    ShowTitleBar() {
        return PUMOTOROFFRESULTENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PUMOTOROFFRESULTENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PUMOTOROFFRESULTENTRY.isResizable;
    }
    IsMovable() {
        return PUMOTOROFFRESULTENTRY.isMovable;
    }
}