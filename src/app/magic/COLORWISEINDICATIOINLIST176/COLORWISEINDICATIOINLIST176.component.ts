import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLORWISEINDICATIOINLIST176.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-COLORWISEINDICATIOINLIST176_COLORWISEINDICATIOINLIST176',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLORWISEINDICATIOINLIST176.component.html'
})
export class COLORWISEINDICATIOINLIST176 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLORWISEINDICATIOINLIST176";
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
        return COLORWISEINDICATIOINLIST176.x;
    }
    Y() {
        return COLORWISEINDICATIOINLIST176.y;
    }
    Width(): string {
        return COLORWISEINDICATIOINLIST176.width;
    }
    Height(): string {
        return COLORWISEINDICATIOINLIST176.height;
    }
    IsCenteredToWindow() {
        return COLORWISEINDICATIOINLIST176.isCenteredToWindow;
    }
    FormName() {
        return COLORWISEINDICATIOINLIST176.formName;
    }
    ShowTitleBar() {
        return COLORWISEINDICATIOINLIST176.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLORWISEINDICATIOINLIST176.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLORWISEINDICATIOINLIST176.isResizable;
    }
    IsMovable() {
        return COLORWISEINDICATIOINLIST176.isMovable;
    }
}