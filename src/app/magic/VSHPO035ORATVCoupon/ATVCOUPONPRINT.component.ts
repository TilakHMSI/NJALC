import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ATVCOUPONPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VSHPO035ORATVCoupon_ATVCOUPONPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ATVCOUPONPRINT.component.html'
})
export class ATVCOUPONPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ATVCOUPON PRINT";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return ATVCOUPONPRINT.x;
    }
    Y() {
        return ATVCOUPONPRINT.y;
    }
    Width(): string {
        return ATVCOUPONPRINT.width;
    }
    Height(): string {
        return ATVCOUPONPRINT.height;
    }
    IsCenteredToWindow() {
        return ATVCOUPONPRINT.isCenteredToWindow;
    }
    FormName() {
        return ATVCOUPONPRINT.formName;
    }
    ShowTitleBar() {
        return ATVCOUPONPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ATVCOUPONPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ATVCOUPONPRINT.isResizable;
    }
    IsMovable() {
        return ATVCOUPONPRINT.isMovable;
    }
}