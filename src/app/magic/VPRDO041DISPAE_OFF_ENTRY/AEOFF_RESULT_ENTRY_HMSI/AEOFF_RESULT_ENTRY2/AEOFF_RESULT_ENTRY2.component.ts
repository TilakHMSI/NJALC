import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AEOFF_RESULT_ENTRY2.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO041DISPAE_OFF_ENTRY_AEOFF_RESULT_ENTRY_HMSI_AEOFF_RESULT_ENTRY2_AEOFF_RESULT_ENTRY2',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AEOFF_RESULT_ENTRY2.component.html'
})
export class AEOFF_RESULT_ENTRY2 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AEOFF_RESULT_ENTRY2";
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
        return AEOFF_RESULT_ENTRY2.x;
    }
    Y() {
        return AEOFF_RESULT_ENTRY2.y;
    }
    Width(): string {
        return AEOFF_RESULT_ENTRY2.width;
    }
    Height(): string {
        return AEOFF_RESULT_ENTRY2.height;
    }
    IsCenteredToWindow() {
        return AEOFF_RESULT_ENTRY2.isCenteredToWindow;
    }
    FormName() {
        return AEOFF_RESULT_ENTRY2.formName;
    }
    ShowTitleBar() {
        return AEOFF_RESULT_ENTRY2.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AEOFF_RESULT_ENTRY2.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AEOFF_RESULT_ENTRY2.isResizable;
    }
    IsMovable() {
        return AEOFF_RESULT_ENTRY2.isMovable;
    }
}