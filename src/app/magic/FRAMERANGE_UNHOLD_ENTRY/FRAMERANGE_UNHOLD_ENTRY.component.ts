import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMERANGE_UNHOLD_ENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-FRAMERANGE_UNHOLD_ENTRY_FRAMERANGE_UNHOLD_ENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FRAMERANGE_UNHOLD_ENTRY.component.html'
})
export class FRAMERANGE_UNHOLD_ENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAMERANGE_UNHOLD_ENTRY";
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
        return FRAMERANGE_UNHOLD_ENTRY.x;
    }
    Y() {
        return FRAMERANGE_UNHOLD_ENTRY.y;
    }
    Width(): string {
        return FRAMERANGE_UNHOLD_ENTRY.width;
    }
    Height(): string {
        return FRAMERANGE_UNHOLD_ENTRY.height;
    }
    IsCenteredToWindow() {
        return FRAMERANGE_UNHOLD_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return FRAMERANGE_UNHOLD_ENTRY.formName;
    }
    ShowTitleBar() {
        return FRAMERANGE_UNHOLD_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAMERANGE_UNHOLD_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAMERANGE_UNHOLD_ENTRY.isResizable;
    }
    IsMovable() {
        return FRAMERANGE_UNHOLD_ENTRY.isMovable;
    }
}