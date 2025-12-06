import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRODINDICATEforHPE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB036_PROD_INDICATE_HPE_PRODINDICATEforHPE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRODINDICATEforHPE.component.html'
})
export class PRODINDICATEforHPE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRODINDICATEforHPE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "550px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PRODINDICATEforHPE.x;
    }
    Y() {
        return PRODINDICATEforHPE.y;
    }
    Width(): string {
        return PRODINDICATEforHPE.width;
    }
    Height(): string {
        return PRODINDICATEforHPE.height;
    }
    IsCenteredToWindow() {
        return PRODINDICATEforHPE.isCenteredToWindow;
    }
    FormName() {
        return PRODINDICATEforHPE.formName;
    }
    ShowTitleBar() {
        return PRODINDICATEforHPE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRODINDICATEforHPE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRODINDICATEforHPE.isResizable;
    }
    IsMovable() {
        return PRODINDICATEforHPE.isMovable;
    }
}