import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./OldNewFormatForFrame5.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB024Re_PrintMENU311_OldNewFormatForFrame_OldNewFormatForFrame5',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './OldNewFormatForFrame5.component.html'
})
export class OldNewFormatForFrame5 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "OldNewFormatForFrame5";
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
        return OldNewFormatForFrame5.x;
    }
    Y() {
        return OldNewFormatForFrame5.y;
    }
    Width(): string {
        return OldNewFormatForFrame5.width;
    }
    Height(): string {
        return OldNewFormatForFrame5.height;
    }
    IsCenteredToWindow() {
        return OldNewFormatForFrame5.isCenteredToWindow;
    }
    FormName() {
        return OldNewFormatForFrame5.formName;
    }
    ShowTitleBar() {
        return OldNewFormatForFrame5.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return OldNewFormatForFrame5.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return OldNewFormatForFrame5.isResizable;
    }
    IsMovable() {
        return OldNewFormatForFrame5.isMovable;
    }
}