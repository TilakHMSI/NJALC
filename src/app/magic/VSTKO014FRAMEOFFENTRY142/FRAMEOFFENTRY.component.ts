import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMEOFFENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VSTKO014FRAMEOFFENTRY142_FRAMEOFFENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FRAMEOFFENTRY.component.html'
})
export class FRAMEOFFENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAMEOFFENTRY";
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
        return FRAMEOFFENTRY.x;
    }
    Y() {
        return FRAMEOFFENTRY.y;
    }
    Width(): string {
        return FRAMEOFFENTRY.width;
    }
    Height(): string {
        return FRAMEOFFENTRY.height;
    }
    IsCenteredToWindow() {
        return FRAMEOFFENTRY.isCenteredToWindow;
    }
    FormName() {
        return FRAMEOFFENTRY.formName;
    }
    ShowTitleBar() {
        return FRAMEOFFENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAMEOFFENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAMEOFFENTRY.isResizable;
    }
    IsMovable() {
        return FRAMEOFFENTRY.isMovable;
    }
}