import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LINECALENDARINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO022_Line_Calendar_Inq_LINECALENDARINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './LINECALENDARINQUIRY.component.html'
})
export class LINECALENDARINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "LINECALENDARINQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "675px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return LINECALENDARINQUIRY.x;
    }
    Y() {
        return LINECALENDARINQUIRY.y;
    }
    Width(): string {
        return LINECALENDARINQUIRY.width;
    }
    Height(): string {
        return LINECALENDARINQUIRY.height;
    }
    IsCenteredToWindow() {
        return LINECALENDARINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return LINECALENDARINQUIRY.formName;
    }
    ShowTitleBar() {
        return LINECALENDARINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return LINECALENDARINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return LINECALENDARINQUIRY.isResizable;
    }
    IsMovable() {
        return LINECALENDARINQUIRY.isMovable;
    }
}