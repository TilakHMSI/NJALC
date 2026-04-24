import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB012_LAEAFRESULTLIST75.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB012_LAEAFRESULTLIST75_VPRDB012_LAEAFRESULTLIST75',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB012_LAEAFRESULTLIST75.component.html'
})
export class VPRDB012_LAEAFRESULTLIST75 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB012_LAEAFRESULTLIST75";
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
        return VPRDB012_LAEAFRESULTLIST75.x;
    }
    Y() {
        return VPRDB012_LAEAFRESULTLIST75.y;
    }
    Width(): string {
        return VPRDB012_LAEAFRESULTLIST75.width;
    }
    Height(): string {
        return VPRDB012_LAEAFRESULTLIST75.height;
    }
    IsCenteredToWindow() {
        return VPRDB012_LAEAFRESULTLIST75.isCenteredToWindow;
    }
    FormName() {
        return VPRDB012_LAEAFRESULTLIST75.formName;
    }
    ShowTitleBar() {
        return VPRDB012_LAEAFRESULTLIST75.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB012_LAEAFRESULTLIST75.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB012_LAEAFRESULTLIST75.isResizable;
    }
    IsMovable() {
        return VPRDB012_LAEAFRESULTLIST75.isMovable;
    }
}