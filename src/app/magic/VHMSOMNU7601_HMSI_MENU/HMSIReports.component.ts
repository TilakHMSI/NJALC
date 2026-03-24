import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./HMSIReports.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSOMNU7601_HMSI_MENU_HMSIReports',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './HMSIReports.component.html'
})
export class HMSIReports extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "HMSI Reports";
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
        return HMSIReports.x;
    }
    Y() {
        return HMSIReports.y;
    }
    Width(): string {
        return HMSIReports.width;
    }
    Height(): string {
        return HMSIReports.height;
    }
    IsCenteredToWindow() {
        return HMSIReports.isCenteredToWindow;
    }
    FormName() {
        return HMSIReports.formName;
    }
    ShowTitleBar() {
        return HMSIReports.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return HMSIReports.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return HMSIReports.isResizable;
    }
    IsMovable() {
        return HMSIReports.isMovable;
    }
}