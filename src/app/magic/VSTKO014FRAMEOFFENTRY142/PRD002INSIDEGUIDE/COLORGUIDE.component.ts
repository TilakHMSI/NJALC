import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLORGUIDE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VSTKO014FRAMEOFFENTRY142_PRD002INSIDEGUIDE_COLORGUIDE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './COLORGUIDE.component.html'
})
export class COLORGUIDE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "COLORGUIDE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return COLORGUIDE.x;
    }
    Y() {
        return COLORGUIDE.y;
    }
    Width(): string {
        return COLORGUIDE.width;
    }
    Height(): string {
        return COLORGUIDE.height;
    }
    IsCenteredToWindow() {
        return COLORGUIDE.isCenteredToWindow;
    }
    FormName() {
        return COLORGUIDE.formName;
    }
    ShowTitleBar() {
        return COLORGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return COLORGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return COLORGUIDE.isResizable;
    }
    IsMovable() {
        return COLORGUIDE.isMovable;
    }
}