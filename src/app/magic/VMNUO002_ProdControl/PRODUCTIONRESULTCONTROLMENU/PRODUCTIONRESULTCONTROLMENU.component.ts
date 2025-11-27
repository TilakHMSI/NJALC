import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODUCTIONRESULTCONTROLMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_PRODUCTIONRESULTCONTROLMENU_PRODUCTIONRESULTCONTROLMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRODUCTIONRESULTCONTROLMENU.component.html'
})
export class PRODUCTIONRESULTCONTROLMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODUCTIONRESULTCONTROLMENU";
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
        return PRODUCTIONRESULTCONTROLMENU.x;
    }
    Y() {
        return PRODUCTIONRESULTCONTROLMENU.y;
    }
    Width(): string {
        return PRODUCTIONRESULTCONTROLMENU.width;
    }
    Height(): string {
        return PRODUCTIONRESULTCONTROLMENU.height;
    }
    IsCenteredToWindow() {
        return PRODUCTIONRESULTCONTROLMENU.isCenteredToWindow;
    }
    FormName() {
        return PRODUCTIONRESULTCONTROLMENU.formName;
    }
    ShowTitleBar() {
        return PRODUCTIONRESULTCONTROLMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODUCTIONRESULTCONTROLMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODUCTIONRESULTCONTROLMENU.isResizable;
    }
    IsMovable() {
        return PRODUCTIONRESULTCONTROLMENU.isMovable;
    }
}