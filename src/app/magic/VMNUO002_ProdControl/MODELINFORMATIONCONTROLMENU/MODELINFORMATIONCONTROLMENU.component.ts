import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MODELINFORMATIONCONTROLMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_MODELINFORMATIONCONTROLMENU_MODELINFORMATIONCONTROLMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MODELINFORMATIONCONTROLMENU.component.html'
})
export class MODELINFORMATIONCONTROLMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MODELINFORMATIONCONTROLMENU";
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
        return MODELINFORMATIONCONTROLMENU.x;
    }
    Y() {
        return MODELINFORMATIONCONTROLMENU.y;
    }
    Width(): string {
        return MODELINFORMATIONCONTROLMENU.width;
    }
    Height(): string {
        return MODELINFORMATIONCONTROLMENU.height;
    }
    IsCenteredToWindow() {
        return MODELINFORMATIONCONTROLMENU.isCenteredToWindow;
    }
    FormName() {
        return MODELINFORMATIONCONTROLMENU.formName;
    }
    ShowTitleBar() {
        return MODELINFORMATIONCONTROLMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MODELINFORMATIONCONTROLMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MODELINFORMATIONCONTROLMENU.isResizable;
    }
    IsMovable() {
        return MODELINFORMATIONCONTROLMENU.isMovable;
    }
}