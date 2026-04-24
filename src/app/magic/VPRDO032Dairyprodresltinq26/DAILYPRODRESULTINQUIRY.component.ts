import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DAILYPRODRESULTINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO032Dairyprodresltinq26_DAILYPRODRESULTINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./DAILYPRODRESULTINQUIRY.component.css'],
    templateUrl: './DAILYPRODRESULTINQUIRY.component.html'
})
export class DAILYPRODRESULTINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DAILYPRODRESULTINQUIRY";
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
        return DAILYPRODRESULTINQUIRY.x;
    }
    Y() {
        return DAILYPRODRESULTINQUIRY.y;
    }
    Width(): string {
        return DAILYPRODRESULTINQUIRY.width;
    }
    Height(): string {
        return DAILYPRODRESULTINQUIRY.height;
    }
    IsCenteredToWindow() {
        return DAILYPRODRESULTINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return DAILYPRODRESULTINQUIRY.formName;
    }
    ShowTitleBar() {
        return DAILYPRODRESULTINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DAILYPRODRESULTINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DAILYPRODRESULTINQUIRY.isResizable;
    }
    IsMovable() {
        return DAILYPRODRESULTINQUIRY.isMovable;
    }
}