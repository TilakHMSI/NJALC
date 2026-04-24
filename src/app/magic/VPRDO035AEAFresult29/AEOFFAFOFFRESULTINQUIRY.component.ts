import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AEOFFAFOFFRESULTINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO035AEAFresult29_AEOFFAFOFFRESULTINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AEOFFAFOFFRESULTINQUIRY.component.html'
})
export class AEOFFAFOFFRESULTINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AEOFFAFOFFRESULTINQUIRY";
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
        return AEOFFAFOFFRESULTINQUIRY.x;
    }
    Y() {
        return AEOFFAFOFFRESULTINQUIRY.y;
    }
    Width(): string {
        return AEOFFAFOFFRESULTINQUIRY.width;
    }
    Height(): string {
        return AEOFFAFOFFRESULTINQUIRY.height;
    }
    IsCenteredToWindow() {
        return AEOFFAFOFFRESULTINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return AEOFFAFOFFRESULTINQUIRY.formName;
    }
    ShowTitleBar() {
        return AEOFFAFOFFRESULTINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AEOFFAFOFFRESULTINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AEOFFAFOFFRESULTINQUIRY.isResizable;
    }
    IsMovable() {
        return AEOFFAFOFFRESULTINQUIRY.isMovable;
    }
}