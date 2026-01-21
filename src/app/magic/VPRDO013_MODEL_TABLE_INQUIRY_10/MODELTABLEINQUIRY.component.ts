import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MODELTABLEINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO013_MODEL_TABLE_INQUIRY_10_MODELTABLEINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './MODELTABLEINQUIRY.component.css',
    templateUrl: './MODELTABLEINQUIRY.component.html'
})
export class MODELTABLEINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MODEL TABLE INQUIRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return MODELTABLEINQUIRY.x;
    }
    Y() {
        return MODELTABLEINQUIRY.y;
    }
    Width(): string {
        return MODELTABLEINQUIRY.width;
    }
    Height(): string {
        return MODELTABLEINQUIRY.height;
    }
    IsCenteredToWindow() {
        return MODELTABLEINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return MODELTABLEINQUIRY.formName;
    }
    ShowTitleBar() {
        return MODELTABLEINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MODELTABLEINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MODELTABLEINQUIRY.isResizable;
    }
    IsMovable() {
        return MODELTABLEINQUIRY.isMovable;
    }
}