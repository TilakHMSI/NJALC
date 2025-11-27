import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODSCEDULECONTROLMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_PRODUCTIONSCHEDULECONTMEN_PRODUCTIONSCHEDULECONTMEN_PRODSCEDULECONTROLMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRODSCEDULECONTROLMENU.component.html'
})
export class PRODSCEDULECONTROLMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODSCEDULECONTROLMENU";
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
        return PRODSCEDULECONTROLMENU.x;
    }
    Y() {
        return PRODSCEDULECONTROLMENU.y;
    }
    Width(): string {
        return PRODSCEDULECONTROLMENU.width;
    }
    Height(): string {
        return PRODSCEDULECONTROLMENU.height;
    }
    IsCenteredToWindow() {
        return PRODSCEDULECONTROLMENU.isCenteredToWindow;
    }
    FormName() {
        return PRODSCEDULECONTROLMENU.formName;
    }
    ShowTitleBar() {
        return PRODSCEDULECONTROLMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODSCEDULECONTROLMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODSCEDULECONTROLMENU.isResizable;
    }
    IsMovable() {
        return PRODSCEDULECONTROLMENU.isMovable;
    }
}