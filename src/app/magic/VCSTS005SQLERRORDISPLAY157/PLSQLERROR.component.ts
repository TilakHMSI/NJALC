import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PLSQLERROR.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VCSTS005SQLERRORDISPLAY157_PLSQLERROR',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PLSQLERROR.component.html'
})
export class PLSQLERROR extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PLSQLERROR";
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
        return PLSQLERROR.x;
    }
    Y() {
        return PLSQLERROR.y;
    }
    Width(): string {
        return PLSQLERROR.width;
    }
    Height(): string {
        return PLSQLERROR.height;
    }
    IsCenteredToWindow() {
        return PLSQLERROR.isCenteredToWindow;
    }
    FormName() {
        return PLSQLERROR.formName;
    }
    ShowTitleBar() {
        return PLSQLERROR.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PLSQLERROR.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PLSQLERROR.isResizable;
    }
    IsMovable() {
        return PLSQLERROR.isMovable;
    }
}