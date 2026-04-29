import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MONTHLYPRODRESULTINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO034Monthresultinquiry28_MONTHLYPRODRESULTINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./MONTHLYPRODRESULTINQUIRY.component.css'],
    templateUrl: './MONTHLYPRODRESULTINQUIRY.component.html'
})
export class MONTHLYPRODRESULTINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MONTHLYPRODRESULTINQUIRY";
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
        return MONTHLYPRODRESULTINQUIRY.x;
    }
    Y() {
        return MONTHLYPRODRESULTINQUIRY.y;
    }
    Width(): string {
        return MONTHLYPRODRESULTINQUIRY.width;
    }
    Height(): string {
        return MONTHLYPRODRESULTINQUIRY.height;
    }
    IsCenteredToWindow() {
        return MONTHLYPRODRESULTINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return MONTHLYPRODRESULTINQUIRY.formName;
    }
    ShowTitleBar() {
        return MONTHLYPRODRESULTINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MONTHLYPRODRESULTINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MONTHLYPRODRESULTINQUIRY.isResizable;
    }
    IsMovable() {
        return MONTHLYPRODRESULTINQUIRY.isMovable;
    }
}