import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB020MODELWORKCREATE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB020MTOCWORKCREATE80_VPRDB020MODELWORKCREATE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB020MODELWORKCREATE.component.html'
})
export class VPRDB020MODELWORKCREATE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB020MODELWORKCREATE";
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
        return VPRDB020MODELWORKCREATE.x;
    }
    Y() {
        return VPRDB020MODELWORKCREATE.y;
    }
    Width(): string {
        return VPRDB020MODELWORKCREATE.width;
    }
    Height(): string {
        return VPRDB020MODELWORKCREATE.height;
    }
    IsCenteredToWindow() {
        return VPRDB020MODELWORKCREATE.isCenteredToWindow;
    }
    FormName() {
        return VPRDB020MODELWORKCREATE.formName;
    }
    ShowTitleBar() {
        return VPRDB020MODELWORKCREATE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB020MODELWORKCREATE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB020MODELWORKCREATE.isResizable;
    }
    IsMovable() {
        return VPRDB020MODELWORKCREATE.isMovable;
    }
}