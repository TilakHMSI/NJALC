import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GENERALMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EV_GENERAL_MENU_GENERALMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './GENERALMENU.component.html'
})
export class GENERALMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GENERALMENU";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return GENERALMENU.x;
    }
    Y() {
        return GENERALMENU.y;
    }
    Width(): string {
        return GENERALMENU.width;
    }
    Height(): string {
        return GENERALMENU.height;
    }
    IsCenteredToWindow() {
        return GENERALMENU.isCenteredToWindow;
    }
    FormName() {
        return GENERALMENU.formName;
    }
    ShowTitleBar() {
        return GENERALMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GENERALMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GENERALMENU.isResizable;
    }
    IsMovable() {
        return GENERALMENU.isMovable;
    }
}