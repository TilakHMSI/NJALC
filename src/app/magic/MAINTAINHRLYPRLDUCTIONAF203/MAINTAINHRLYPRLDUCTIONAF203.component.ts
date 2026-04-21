import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MAINTAINHRLYPRLDUCTIONAF203.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-MAINTAINHRLYPRLDUCTIONAF203_MAINTAINHRLYPRLDUCTIONAF203',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MAINTAINHRLYPRLDUCTIONAF203.component.html'
})
export class MAINTAINHRLYPRLDUCTIONAF203 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MAINTAINHRLYPRLDUCTIONAF203";
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
        return MAINTAINHRLYPRLDUCTIONAF203.x;
    }
    Y() {
        return MAINTAINHRLYPRLDUCTIONAF203.y;
    }
    Width(): string {
        return MAINTAINHRLYPRLDUCTIONAF203.width;
    }
    Height(): string {
        return MAINTAINHRLYPRLDUCTIONAF203.height;
    }
    IsCenteredToWindow() {
        return MAINTAINHRLYPRLDUCTIONAF203.isCenteredToWindow;
    }
    FormName() {
        return MAINTAINHRLYPRLDUCTIONAF203.formName;
    }
    ShowTitleBar() {
        return MAINTAINHRLYPRLDUCTIONAF203.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MAINTAINHRLYPRLDUCTIONAF203.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MAINTAINHRLYPRLDUCTIONAF203.isResizable;
    }
    IsMovable() {
        return MAINTAINHRLYPRLDUCTIONAF203.isMovable;
    }
}