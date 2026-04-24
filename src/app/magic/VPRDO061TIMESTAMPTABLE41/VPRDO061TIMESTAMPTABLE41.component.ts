import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDO061TIMESTAMPTABLE41.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO061TIMESTAMPTABLE41_VPRDO061TIMESTAMPTABLE41',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDO061TIMESTAMPTABLE41.component.html'
})
export class VPRDO061TIMESTAMPTABLE41 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDO061TIMESTAMPTABLE41";
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
        return VPRDO061TIMESTAMPTABLE41.x;
    }
    Y() {
        return VPRDO061TIMESTAMPTABLE41.y;
    }
    Width(): string {
        return VPRDO061TIMESTAMPTABLE41.width;
    }
    Height(): string {
        return VPRDO061TIMESTAMPTABLE41.height;
    }
    IsCenteredToWindow() {
        return VPRDO061TIMESTAMPTABLE41.isCenteredToWindow;
    }
    FormName() {
        return VPRDO061TIMESTAMPTABLE41.formName;
    }
    ShowTitleBar() {
        return VPRDO061TIMESTAMPTABLE41.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDO061TIMESTAMPTABLE41.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDO061TIMESTAMPTABLE41.isResizable;
    }
    IsMovable() {
        return VPRDO061TIMESTAMPTABLE41.isMovable;
    }
}