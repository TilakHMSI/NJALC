import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODUCTIONCONTROLMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_PRODUCTIONCONTROLMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRODUCTIONCONTROLMENU.component.html'
})
export class PRODUCTIONCONTROLMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODUCTION CONTROL MENU";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PRODUCTIONCONTROLMENU.x;
    }
    Y() {
        return PRODUCTIONCONTROLMENU.y;
    }
    Width(): string {
        return PRODUCTIONCONTROLMENU.width;
    }
    Height(): string {
        return PRODUCTIONCONTROLMENU.height;
    }
    IsCenteredToWindow() {
        return PRODUCTIONCONTROLMENU.isCenteredToWindow;
    }
    FormName() {
        return PRODUCTIONCONTROLMENU.formName;
    }
    ShowTitleBar() {
        return PRODUCTIONCONTROLMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODUCTIONCONTROLMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODUCTIONCONTROLMENU.isResizable;
    }
    IsMovable() {
        return PRODUCTIONCONTROLMENU.isMovable;
    }
}