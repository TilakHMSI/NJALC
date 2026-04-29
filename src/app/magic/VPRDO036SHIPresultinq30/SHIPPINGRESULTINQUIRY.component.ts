import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SHIPPINGRESULTINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO036SHIPresultinq30_SHIPPINGRESULTINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SHIPPINGRESULTINQUIRY.component.html'
})
export class SHIPPINGRESULTINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SHIPPINGRESULTINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "750px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SHIPPINGRESULTINQUIRY.x;
    }
    Y() {
        return SHIPPINGRESULTINQUIRY.y;
    }
    Width(): string {
        return SHIPPINGRESULTINQUIRY.width;
    }
    Height(): string {
        return SHIPPINGRESULTINQUIRY.height;
    }
    IsCenteredToWindow() {
        return SHIPPINGRESULTINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return SHIPPINGRESULTINQUIRY.formName;
    }
    ShowTitleBar() {
        return SHIPPINGRESULTINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SHIPPINGRESULTINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SHIPPINGRESULTINQUIRY.isResizable;
    }
    IsMovable() {
        return SHIPPINGRESULTINQUIRY.isMovable;
    }
}