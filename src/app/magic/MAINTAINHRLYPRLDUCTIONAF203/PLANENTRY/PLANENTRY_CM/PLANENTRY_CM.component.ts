import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PLANENTRY_CM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-MAINTAINHRLYPRLDUCTIONAF203_PLANENTRY_PLANENTRY_CM_PLANENTRY_CM',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./PLANENTRY_CM.component.css'],
    templateUrl: './PLANENTRY_CM.component.html'
})
export class PLANENTRY_CM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PLANENTRY_CM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "900px";
    private static readonly height: string = "650px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PLANENTRY_CM.x;
    }
    Y() {
        return PLANENTRY_CM.y;
    }
    Width(): string {
        return PLANENTRY_CM.width;
    }
    Height(): string {
        return PLANENTRY_CM.height;
    }
    IsCenteredToWindow() {
        return PLANENTRY_CM.isCenteredToWindow;
    }
    FormName() {
        return PLANENTRY_CM.formName;
    }
    ShowTitleBar() {
        return PLANENTRY_CM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PLANENTRY_CM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PLANENTRY_CM.isResizable;
    }
    IsMovable() {
        return PLANENTRY_CM.isMovable;
    }
}