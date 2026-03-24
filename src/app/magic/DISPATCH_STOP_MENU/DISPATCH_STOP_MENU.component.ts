import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DISPATCH_STOP_MENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DISPATCH_STOP_MENU_DISPATCH_STOP_MENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DISPATCH_STOP_MENU.component.html'
})
export class DISPATCH_STOP_MENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DISPATCH STOP MENU";
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
        return DISPATCH_STOP_MENU.x;
    }
    Y() {
        return DISPATCH_STOP_MENU.y;
    }
    Width(): string {
        return DISPATCH_STOP_MENU.width;
    }
    Height(): string {
        return DISPATCH_STOP_MENU.height;
    }
    IsCenteredToWindow() {
        return DISPATCH_STOP_MENU.isCenteredToWindow;
    }
    FormName() {
        return DISPATCH_STOP_MENU.formName;
    }
    ShowTitleBar() {
        return DISPATCH_STOP_MENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DISPATCH_STOP_MENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DISPATCH_STOP_MENU.isResizable;
    }
    IsMovable() {
        return DISPATCH_STOP_MENU.isMovable;
    }
}