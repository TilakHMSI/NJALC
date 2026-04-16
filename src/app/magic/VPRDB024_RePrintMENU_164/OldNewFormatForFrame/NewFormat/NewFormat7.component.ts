import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./NewFormat7.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB024_RePrintMENU_164_OldNewFormatForFrame_NewFormat_NewFormat7',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './NewFormat7.component.html'
})
export class NewFormat7 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "NewFormat7";
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
        return NewFormat7.x;
    }
    Y() {
        return NewFormat7.y;
    }
    Width(): string {
        return NewFormat7.width;
    }
    Height(): string {
        return NewFormat7.height;
    }
    IsCenteredToWindow() {
        return NewFormat7.isCenteredToWindow;
    }
    FormName() {
        return NewFormat7.formName;
    }
    ShowTitleBar() {
        return NewFormat7.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return NewFormat7.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return NewFormat7.isResizable;
    }
    IsMovable() {
        return NewFormat7.isMovable;
    }
}