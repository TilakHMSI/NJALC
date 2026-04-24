import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGFRMNOHISTORYINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO003ENGFRMNOHisInq6_ENGFRMNOHISTORYINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ENGFRMNOHISTORYINQUIRY.component.html'
})
export class ENGFRMNOHISTORYINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ENGFRMNOHISTORYINQUIRY";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ENGFRMNOHISTORYINQUIRY.x;
    }
    Y() {
        return ENGFRMNOHISTORYINQUIRY.y;
    }
    Width(): string {
        return ENGFRMNOHISTORYINQUIRY.width;
    }
    Height(): string {
        return ENGFRMNOHISTORYINQUIRY.height;
    }
    IsCenteredToWindow() {
        return ENGFRMNOHISTORYINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return ENGFRMNOHISTORYINQUIRY.formName;
    }
    ShowTitleBar() {
        return ENGFRMNOHISTORYINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ENGFRMNOHISTORYINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ENGFRMNOHISTORYINQUIRY.isResizable;
    }
    IsMovable() {
        return ENGFRMNOHISTORYINQUIRY.isMovable;
    }
}