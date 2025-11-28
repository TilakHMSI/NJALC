import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRDS024.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDS024_PRDS024',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRDS024.component.html'
})
export class PRDS024 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRDS024";
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
        return PRDS024.x;
    }
    Y() {
        return PRDS024.y;
    }
    Width(): string {
        return PRDS024.width;
    }
    Height(): string {
        return PRDS024.height;
    }
    IsCenteredToWindow() {
        return PRDS024.isCenteredToWindow;
    }
    FormName() {
        return PRDS024.formName;
    }
    ShowTitleBar() {
        return PRDS024.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRDS024.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRDS024.isResizable;
    }
    IsMovable() {
        return PRDS024.isMovable;
    }
}