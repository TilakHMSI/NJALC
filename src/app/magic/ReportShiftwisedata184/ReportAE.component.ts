import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ReportAE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-ReportShiftwisedata184_ReportAE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ReportAE.component.html'
})
export class ReportAE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ReportAE";
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
        return ReportAE.x;
    }
    Y() {
        return ReportAE.y;
    }
    Width(): string {
        return ReportAE.width;
    }
    Height(): string {
        return ReportAE.height;
    }
    IsCenteredToWindow() {
        return ReportAE.isCenteredToWindow;
    }
    FormName() {
        return ReportAE.formName;
    }
    ShowTitleBar() {
        return ReportAE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ReportAE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ReportAE.isResizable;
    }
    IsMovable() {
        return ReportAE.isMovable;
    }
}