import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODUCTPLANINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO182_MONTHLY_SCHD_INQUIRY_PRODUCTPLANINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './PRODUCTPLANINQUIRY.component.css',
    templateUrl: './PRODUCTPLANINQUIRY.component.html'
})
export class PRODUCTPLANINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODUCTPLANINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PRODUCTPLANINQUIRY.x;
    }
    Y() {
        return PRODUCTPLANINQUIRY.y;
    }
    Width(): string {
        return PRODUCTPLANINQUIRY.width;
    }
    Height(): string {
        return PRODUCTPLANINQUIRY.height;
    }
    IsCenteredToWindow() {
        return PRODUCTPLANINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return PRODUCTPLANINQUIRY.formName;
    }
    ShowTitleBar() {
        return PRODUCTPLANINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODUCTPLANINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODUCTPLANINQUIRY.isResizable;
    }
    IsMovable() {
        return PRODUCTPLANINQUIRY.isMovable;
    }
}