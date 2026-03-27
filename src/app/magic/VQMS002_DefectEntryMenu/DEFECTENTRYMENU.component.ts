import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DEFECTENTRYMENU.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS002_DefectEntryMenu_DEFECTENTRYMENU',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DEFECTENTRYMENU.component.html'
})
export class DEFECTENTRYMENU extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DEFECTENTRYMENU";
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
        return DEFECTENTRYMENU.x;
    }
    Y() {
        return DEFECTENTRYMENU.y;
    }
    Width(): string {
        return DEFECTENTRYMENU.width;
    }
    Height(): string {
        return DEFECTENTRYMENU.height;
    }
    IsCenteredToWindow() {
        return DEFECTENTRYMENU.isCenteredToWindow;
    }
    FormName() {
        return DEFECTENTRYMENU.formName;
    }
    ShowTitleBar() {
        return DEFECTENTRYMENU.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DEFECTENTRYMENU.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DEFECTENTRYMENU.isResizable;
    }
    IsMovable() {
        return DEFECTENTRYMENU.isMovable;
    }
}