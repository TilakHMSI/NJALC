import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MODELGUIDE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VSTKO014FRAMEOFFENTRY142_PRD001GUIDE_MODELGUIDE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MODELGUIDE.component.html'
})
export class MODELGUIDE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MODELGUIDE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return MODELGUIDE.x;
    }
    Y() {
        return MODELGUIDE.y;
    }
    Width(): string {
        return MODELGUIDE.width;
    }
    Height(): string {
        return MODELGUIDE.height;
    }
    IsCenteredToWindow() {
        return MODELGUIDE.isCenteredToWindow;
    }
    FormName() {
        return MODELGUIDE.formName;
    }
    ShowTitleBar() {
        return MODELGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MODELGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MODELGUIDE.isResizable;
    }
    IsMovable() {
        return MODELGUIDE.isMovable;
    }
}