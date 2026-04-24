import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDO037HISTORYentry31.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO037HISTORYentry31_VPRDO037HISTORYentry31',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDO037HISTORYentry31.component.html'
})
export class VPRDO037HISTORYentry31 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDO037HISTORYentry31";
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
        return VPRDO037HISTORYentry31.x;
    }
    Y() {
        return VPRDO037HISTORYentry31.y;
    }
    Width(): string {
        return VPRDO037HISTORYentry31.width;
    }
    Height(): string {
        return VPRDO037HISTORYentry31.height;
    }
    IsCenteredToWindow() {
        return VPRDO037HISTORYentry31.isCenteredToWindow;
    }
    FormName() {
        return VPRDO037HISTORYentry31.formName;
    }
    ShowTitleBar() {
        return VPRDO037HISTORYentry31.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDO037HISTORYentry31.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDO037HISTORYentry31.isResizable;
    }
    IsMovable() {
        return VPRDO037HISTORYentry31.isMovable;
    }
}