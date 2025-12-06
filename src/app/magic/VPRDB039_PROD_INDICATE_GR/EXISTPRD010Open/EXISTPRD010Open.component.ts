import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./EXISTPRD010Open.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB039_PROD_INDICATE_GR_EXISTPRD010Open_EXISTPRD010Open',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './EXISTPRD010Open.component.html',
    styleUrl: './EXIST10.component.css'
})

export class EXISTPRD010Open extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "EXISTPRD010Open";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return EXISTPRD010Open.x;
    }
    Y() {
        return EXISTPRD010Open.y;
    }
    Width(): string {
        return EXISTPRD010Open.width;
    }
    Height(): string {
        return EXISTPRD010Open.height;
    }
    IsCenteredToWindow() {
        return EXISTPRD010Open.isCenteredToWindow;
    }
    FormName() {
        return EXISTPRD010Open.formName;
    }
    ShowTitleBar() {
        return EXISTPRD010Open.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return EXISTPRD010Open.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return EXISTPRD010Open.isResizable;
    }
    IsMovable() {
        return EXISTPRD010Open.isMovable;
    }
}