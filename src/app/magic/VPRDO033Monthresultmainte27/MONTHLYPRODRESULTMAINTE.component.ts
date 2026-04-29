import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MONTHLYPRODRESULTMAINTE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO033Monthresultmainte27_MONTHLYPRODRESULTMAINTE',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./MONTHLYPRODRESULTMAINTE.component.css'],
    templateUrl: './MONTHLYPRODRESULTMAINTE.component.html'
})
export class MONTHLYPRODRESULTMAINTE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MONTHLYPRODRESULTMAINTE";
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
        return MONTHLYPRODRESULTMAINTE.x;
    }
    Y() {
        return MONTHLYPRODRESULTMAINTE.y;
    }
    Width(): string {
        return MONTHLYPRODRESULTMAINTE.width;
    }
    Height(): string {
        return MONTHLYPRODRESULTMAINTE.height;
    }
    IsCenteredToWindow() {
        return MONTHLYPRODRESULTMAINTE.isCenteredToWindow;
    }
    FormName() {
        return MONTHLYPRODRESULTMAINTE.formName;
    }
    ShowTitleBar() {
        return MONTHLYPRODRESULTMAINTE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MONTHLYPRODRESULTMAINTE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MONTHLYPRODRESULTMAINTE.isResizable;
    }
    IsMovable() {
        return MONTHLYPRODRESULTMAINTE.isMovable;
    }
}