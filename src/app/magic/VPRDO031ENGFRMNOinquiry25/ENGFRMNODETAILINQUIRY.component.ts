import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGFRMNODETAILINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO031ENGFRMNOinquiry25_ENGFRMNODETAILINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ENGFRMNODETAILINQUIRY.component.html'
})
export class ENGFRMNODETAILINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGFRMNODETAILINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ENGFRMNODETAILINQUIRY.x;
    }
    Y() {
        return ENGFRMNODETAILINQUIRY.y;
    }
    Width(): string {
        return ENGFRMNODETAILINQUIRY.width;
    }
    Height(): string {
        return ENGFRMNODETAILINQUIRY.height;
    }
    IsCenteredToWindow() {
        return ENGFRMNODETAILINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return ENGFRMNODETAILINQUIRY.formName;
    }
    ShowTitleBar() {
        return ENGFRMNODETAILINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGFRMNODETAILINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGFRMNODETAILINQUIRY.isResizable;
    }
    IsMovable() {
        return ENGFRMNODETAILINQUIRY.isMovable;
    }
}