import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MENUSELECT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_MENUSELECT_MENUSELECT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MENUSELECT.component.html'
})
export class MENUSELECT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MENUSELECT";
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
        return MENUSELECT.x;
    }
    Y() {
        return MENUSELECT.y;
    }
    Width(): string {
        return MENUSELECT.width;
    }
    Height(): string {
        return MENUSELECT.height;
    }
    IsCenteredToWindow() {
        return MENUSELECT.isCenteredToWindow;
    }
    FormName() {
        return MENUSELECT.formName;
    }
    ShowTitleBar() {
        return MENUSELECT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MENUSELECT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MENUSELECT.isResizable;
    }
    IsMovable() {
        return MENUSELECT.isMovable;
    }
}