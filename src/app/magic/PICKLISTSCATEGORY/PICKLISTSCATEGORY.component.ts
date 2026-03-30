import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PICKLISTSCATEGORY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PICKLISTSCATEGORY_PICKLISTSCATEGORY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PICKLISTSCATEGORY.component.html'
})
export class PICKLISTSCATEGORY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PICKLISTSCATEGORY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return PICKLISTSCATEGORY.x;
    }
    Y() {
        return PICKLISTSCATEGORY.y;
    }
    Width(): string {
        return PICKLISTSCATEGORY.width;
    }
    Height(): string {
        return PICKLISTSCATEGORY.height;
    }
    IsCenteredToWindow() {
        return PICKLISTSCATEGORY.isCenteredToWindow;
    }
    FormName() {
        return PICKLISTSCATEGORY.formName;
    }
    ShowTitleBar() {
        return PICKLISTSCATEGORY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PICKLISTSCATEGORY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PICKLISTSCATEGORY.isResizable;
    }
    IsMovable() {
        return PICKLISTSCATEGORY.isMovable;
    }
}