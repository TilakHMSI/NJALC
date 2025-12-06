import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB038PRODINDICATE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB038_PROD_INDICATE_HMSI_VPRDB038PRODINDICATE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB038PRODINDICATE.component.html'
})
export class VPRDB038PRODINDICATE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB038PRODINDICATE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB038PRODINDICATE.x;
    }
    Y() {
        return VPRDB038PRODINDICATE.y;
    }
    Width(): string {
        return VPRDB038PRODINDICATE.width;
    }
    Height(): string {
        return VPRDB038PRODINDICATE.height;
    }
    IsCenteredToWindow() {
        return VPRDB038PRODINDICATE.isCenteredToWindow;
    }
    FormName() {
        return VPRDB038PRODINDICATE.formName;
    }
    ShowTitleBar() {
        return VPRDB038PRODINDICATE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB038PRODINDICATE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB038PRODINDICATE.isResizable;
    }
    IsMovable() {
        return VPRDB038PRODINDICATE.isMovable;
    }
}