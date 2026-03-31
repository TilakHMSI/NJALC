import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CodeTypeMasterCM.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CodeTypeMaster_CodeTypeMasterList_CodeTypeMasterCM_CodeTypeMasterCM',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CodeTypeMasterCM.component.html'
})
export class CodeTypeMasterCM extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CodeTypeMasterCM";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "350px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return CodeTypeMasterCM.x;
    }
    Y() {
        return CodeTypeMasterCM.y;
    }
    Width(): string {
        return CodeTypeMasterCM.width;
    }
    Height(): string {
        return CodeTypeMasterCM.height;
    }
    IsCenteredToWindow() {
        return CodeTypeMasterCM.isCenteredToWindow;
    }
    FormName() {
        return CodeTypeMasterCM.formName;
    }
    ShowTitleBar() {
        return CodeTypeMasterCM.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CodeTypeMasterCM.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return CodeTypeMasterCM.isResizable;
    }
    IsMovable() {
        return CodeTypeMasterCM.isMovable;
    }
}