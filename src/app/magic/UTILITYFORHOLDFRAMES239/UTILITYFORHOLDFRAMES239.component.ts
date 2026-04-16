import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./UTILITYFORHOLDFRAMES239.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-UTILITYFORHOLDFRAMES239_UTILITYFORHOLDFRAMES239',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './UTILITYFORHOLDFRAMES239.component.html'
})
export class UTILITYFORHOLDFRAMES239 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "UTILITYFORHOLDFRAMES239";
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
        return UTILITYFORHOLDFRAMES239.x;
    }
    Y() {
        return UTILITYFORHOLDFRAMES239.y;
    }
    Width(): string {
        return UTILITYFORHOLDFRAMES239.width;
    }
    Height(): string {
        return UTILITYFORHOLDFRAMES239.height;
    }
    IsCenteredToWindow() {
        return UTILITYFORHOLDFRAMES239.isCenteredToWindow;
    }
    FormName() {
        return UTILITYFORHOLDFRAMES239.formName;
    }
    ShowTitleBar() {
        return UTILITYFORHOLDFRAMES239.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return UTILITYFORHOLDFRAMES239.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return UTILITYFORHOLDFRAMES239.isResizable;
    }
    IsMovable() {
        return UTILITYFORHOLDFRAMES239.isMovable;
    }
}