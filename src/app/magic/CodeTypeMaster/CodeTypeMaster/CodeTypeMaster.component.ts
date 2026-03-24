import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CodeTypeMaster.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CodeTypeMaster_CodeTypeMaster_CodeTypeMaster',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CodeTypeMaster.component.html'
})
export class CodeTypeMaster extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CodeTypeMaster";
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
        return CodeTypeMaster.x;
    }
    Y() {
        return CodeTypeMaster.y;
    }
    Width(): string {
        return CodeTypeMaster.width;
    }
    Height(): string {
        return CodeTypeMaster.height;
    }
    IsCenteredToWindow() {
        return CodeTypeMaster.isCenteredToWindow;
    }
    FormName() {
        return CodeTypeMaster.formName;
    }
    ShowTitleBar() {
        return CodeTypeMaster.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CodeTypeMaster.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CodeTypeMaster.isResizable;
    }
    IsMovable() {
        return CodeTypeMaster.isMovable;
    }
}