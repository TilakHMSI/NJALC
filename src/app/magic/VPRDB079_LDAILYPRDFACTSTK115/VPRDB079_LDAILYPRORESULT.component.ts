import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB079_LDAILYPRORESULT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB079_LDAILYPRDFACTSTK115_VPRDB079_LDAILYPRORESULT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB079_LDAILYPRORESULT.component.html'
})
export class VPRDB079_LDAILYPRORESULT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB079_LDAILYPRORESULT";
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
        return VPRDB079_LDAILYPRORESULT.x;
    }
    Y() {
        return VPRDB079_LDAILYPRORESULT.y;
    }
    Width(): string {
        return VPRDB079_LDAILYPRORESULT.width;
    }
    Height(): string {
        return VPRDB079_LDAILYPRORESULT.height;
    }
    IsCenteredToWindow() {
        return VPRDB079_LDAILYPRORESULT.isCenteredToWindow;
    }
    FormName() {
        return VPRDB079_LDAILYPRORESULT.formName;
    }
    ShowTitleBar() {
        return VPRDB079_LDAILYPRORESULT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB079_LDAILYPRORESULT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB079_LDAILYPRORESULT.isResizable;
    }
    IsMovable() {
        return VPRDB079_LDAILYPRORESULT.isMovable;
    }
}