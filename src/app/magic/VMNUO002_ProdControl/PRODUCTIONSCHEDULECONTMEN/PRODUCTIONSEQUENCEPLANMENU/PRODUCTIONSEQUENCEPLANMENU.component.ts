import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODUCTIONSEQUENCEPLANMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_PRODUCTIONSCHEDULECONTMEN_PRODUCTIONSEQUENCEPLANMENU_PRODUCTIONSEQUENCEPLANMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRODUCTIONSEQUENCEPLANMENU.component.html'
})
export class PRODUCTIONSEQUENCEPLANMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODUCTIONSEQUENCEPLANMENU";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1200px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PRODUCTIONSEQUENCEPLANMENU.x;
    }
    Y() {
        return PRODUCTIONSEQUENCEPLANMENU.y;
    }
    Width(): string {
        return PRODUCTIONSEQUENCEPLANMENU.width;
    }
    Height(): string {
        return PRODUCTIONSEQUENCEPLANMENU.height;
    }
    IsCenteredToWindow() {
        return PRODUCTIONSEQUENCEPLANMENU.isCenteredToWindow;
    }
    FormName() {
        return PRODUCTIONSEQUENCEPLANMENU.formName;
    }
    ShowTitleBar() {
        return PRODUCTIONSEQUENCEPLANMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODUCTIONSEQUENCEPLANMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODUCTIONSEQUENCEPLANMENU.isResizable;
    }
    IsMovable() {
        return PRODUCTIONSEQUENCEPLANMENU.isMovable;
    }
}