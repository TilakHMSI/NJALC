import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MTOCTABLEINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO020_MTOC_TABLE_INQUIRY_14_MTOCTABLEINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './MTOCTABLEINQUIRY.component.css',
    templateUrl: './MTOCTABLEINQUIRY.component.html'
})
export class MTOCTABLEINQUIRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MTOC TABLE INQUIRY";
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
        return MTOCTABLEINQUIRY.x;
    }
    Y() {
        return MTOCTABLEINQUIRY.y;
    }
    Width(): string {
        return MTOCTABLEINQUIRY.width;
    }
    Height(): string {
        return MTOCTABLEINQUIRY.height;
    }
    IsCenteredToWindow() {
        return MTOCTABLEINQUIRY.isCenteredToWindow;
    }
    FormName() {
        return MTOCTABLEINQUIRY.formName;
    }
    ShowTitleBar() {
        return MTOCTABLEINQUIRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MTOCTABLEINQUIRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MTOCTABLEINQUIRY.isResizable;
    }
    IsMovable() {
        return MTOCTABLEINQUIRY.isMovable;
    }
}