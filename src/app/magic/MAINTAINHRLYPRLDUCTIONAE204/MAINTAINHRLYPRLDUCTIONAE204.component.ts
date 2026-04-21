import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MAINTAINHRLYPRLDUCTIONAE204.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-MAINTAINHRLYPRLDUCTIONAE204_MAINTAINHRLYPRLDUCTIONAE204',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MAINTAINHRLYPRLDUCTIONAE204.component.html'
})
export class MAINTAINHRLYPRLDUCTIONAE204 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MAINTAINHRLYPRLDUCTIONAE204";
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
        return MAINTAINHRLYPRLDUCTIONAE204.x;
    }
    Y() {
        return MAINTAINHRLYPRLDUCTIONAE204.y;
    }
    Width(): string {
        return MAINTAINHRLYPRLDUCTIONAE204.width;
    }
    Height(): string {
        return MAINTAINHRLYPRLDUCTIONAE204.height;
    }
    IsCenteredToWindow() {
        return MAINTAINHRLYPRLDUCTIONAE204.isCenteredToWindow;
    }
    FormName() {
        return MAINTAINHRLYPRLDUCTIONAE204.formName;
    }
    ShowTitleBar() {
        return MAINTAINHRLYPRLDUCTIONAE204.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MAINTAINHRLYPRLDUCTIONAE204.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MAINTAINHRLYPRLDUCTIONAE204.isResizable;
    }
    IsMovable() {
        return MAINTAINHRLYPRLDUCTIONAE204.isMovable;
    }
}