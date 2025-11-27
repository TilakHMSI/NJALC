import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODSCHEDULECONTROLMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_PRODUCTIONSCHEDULECONTMEN_PRODSCHEDULECONTROLMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRODSCHEDULECONTROLMENU.component.html'
})
export class PRODSCHEDULECONTROLMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODSCHEDULECONTROLMENU";
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
        return PRODSCHEDULECONTROLMENU.x;
    }
    Y() {
        return PRODSCHEDULECONTROLMENU.y;
    }
    Width(): string {
        return PRODSCHEDULECONTROLMENU.width;
    }
    Height(): string {
        return PRODSCHEDULECONTROLMENU.height;
    }
    IsCenteredToWindow() {
        return PRODSCHEDULECONTROLMENU.isCenteredToWindow;
    }
    FormName() {
        return PRODSCHEDULECONTROLMENU.formName;
    }
    ShowTitleBar() {
        return PRODSCHEDULECONTROLMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODSCHEDULECONTROLMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODSCHEDULECONTROLMENU.isResizable;
    }
    IsMovable() {
        return PRODSCHEDULECONTROLMENU.isMovable;
    }
}