import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODUCTIONRESULTENTRYMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_PRODRESULTENTRYMENUHMS_PRODUCTIONRESULTENTRYMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRODUCTIONRESULTENTRYMENU.component.html'
})
export class PRODUCTIONRESULTENTRYMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODUCTION RESULT ENTRY MENU";
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
        return PRODUCTIONRESULTENTRYMENU.x;
    }
    Y() {
        return PRODUCTIONRESULTENTRYMENU.y;
    }
    Width(): string {
        return PRODUCTIONRESULTENTRYMENU.width;
    }
    Height(): string {
        return PRODUCTIONRESULTENTRYMENU.height;
    }
    IsCenteredToWindow() {
        return PRODUCTIONRESULTENTRYMENU.isCenteredToWindow;
    }
    FormName() {
        return PRODUCTIONRESULTENTRYMENU.formName;
    }
    ShowTitleBar() {
        return PRODUCTIONRESULTENTRYMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODUCTIONRESULTENTRYMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODUCTIONRESULTENTRYMENU.isResizable;
    }
    IsMovable() {
        return PRODUCTIONRESULTENTRYMENU.isMovable;
    }
}