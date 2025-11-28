import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB004ORKANKENSYOHSC.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB004ORFVISPRINTHSC_VPRDB004ORKANKENSYOHSC',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB004ORKANKENSYOHSC.component.html'
})
export class VPRDB004ORKANKENSYOHSC extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB004ORKANKENSYOHSC";
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
        return VPRDB004ORKANKENSYOHSC.x;
    }
    Y() {
        return VPRDB004ORKANKENSYOHSC.y;
    }
    Width(): string {
        return VPRDB004ORKANKENSYOHSC.width;
    }
    Height(): string {
        return VPRDB004ORKANKENSYOHSC.height;
    }
    IsCenteredToWindow() {
        return VPRDB004ORKANKENSYOHSC.isCenteredToWindow;
    }
    FormName() {
        return VPRDB004ORKANKENSYOHSC.formName;
    }
    ShowTitleBar() {
        return VPRDB004ORKANKENSYOHSC.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB004ORKANKENSYOHSC.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB004ORKANKENSYOHSC.isResizable;
    }
    IsMovable() {
        return VPRDB004ORKANKENSYOHSC.isMovable;
    }
}