import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./KDORDERPLANMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VMNUO002_ProdControl_PRODUCTIONSCHEDULECONTMEN_KDORDERPLANMENU_KDORDERPLANMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './KDORDERPLANMENU.component.html'
})
export class KDORDERPLANMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "KDORDERPLANMENU";
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
        return KDORDERPLANMENU.x;
    }
    Y() {
        return KDORDERPLANMENU.y;
    }
    Width(): string {
        return KDORDERPLANMENU.width;
    }
    Height(): string {
        return KDORDERPLANMENU.height;
    }
    IsCenteredToWindow() {
        return KDORDERPLANMENU.isCenteredToWindow;
    }
    FormName() {
        return KDORDERPLANMENU.formName;
    }
    ShowTitleBar() {
        return KDORDERPLANMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return KDORDERPLANMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return KDORDERPLANMENU.isResizable;
    }
    IsMovable() {
        return KDORDERPLANMENU.isMovable;
    }
}