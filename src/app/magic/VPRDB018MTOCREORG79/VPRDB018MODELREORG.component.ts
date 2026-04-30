import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB018MODELREORG.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB018MTOCREORG79_VPRDB018MODELREORG',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB018MODELREORG.component.html'
})
export class VPRDB018MODELREORG extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB018MODELREORG";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB018MODELREORG.x;
    }
    Y() {
        return VPRDB018MODELREORG.y;
    }
    Width(): string {
        return VPRDB018MODELREORG.width;
    }
    Height(): string {
        return VPRDB018MODELREORG.height;
    }
    IsCenteredToWindow() {
        return VPRDB018MODELREORG.isCenteredToWindow;
    }
    FormName() {
        return VPRDB018MODELREORG.formName;
    }
    ShowTitleBar() {
        return VPRDB018MODELREORG.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB018MODELREORG.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB018MODELREORG.isResizable;
    }
    IsMovable() {
        return VPRDB018MODELREORG.isMovable;
    }
}