import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./OldNewFormatForENGINE5.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB024Re_PrintMENU209_OldNewFormatForENGINE_OldNewFormatForENGINE5',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './OldNewFormatForENGINE5.component.html'
})
export class OldNewFormatForENGINE5 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "OldNewFormatForENGINE5";
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
        return OldNewFormatForENGINE5.x;
    }
    Y() {
        return OldNewFormatForENGINE5.y;
    }
    Width(): string {
        return OldNewFormatForENGINE5.width;
    }
    Height(): string {
        return OldNewFormatForENGINE5.height;
    }
    IsCenteredToWindow() {
        return OldNewFormatForENGINE5.isCenteredToWindow;
    }
    FormName() {
        return OldNewFormatForENGINE5.formName;
    }
    ShowTitleBar() {
        return OldNewFormatForENGINE5.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return OldNewFormatForENGINE5.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return OldNewFormatForENGINE5.isResizable;
    }
    IsMovable() {
        return OldNewFormatForENGINE5.isMovable;
    }
}