import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VBOMG003_PRD010_GUIDE2_133.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VBOMG003_PRD010_GUIDE2_133_VBOMG003_PRD010_GUIDE2_133',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VBOMG003_PRD010_GUIDE2_133.component.html'
})
export class VBOMG003_PRD010_GUIDE2_133 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VBOMG003_PRD010_GUIDE2_133";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VBOMG003_PRD010_GUIDE2_133.x;
    }
    Y() {
        return VBOMG003_PRD010_GUIDE2_133.y;
    }
    Width(): string {
        return VBOMG003_PRD010_GUIDE2_133.width;
    }
    Height(): string {
        return VBOMG003_PRD010_GUIDE2_133.height;
    }
    IsCenteredToWindow() {
        return VBOMG003_PRD010_GUIDE2_133.isCenteredToWindow;
    }
    FormName() {
        return VBOMG003_PRD010_GUIDE2_133.formName;
    }
    ShowTitleBar() {
        return VBOMG003_PRD010_GUIDE2_133.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VBOMG003_PRD010_GUIDE2_133.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VBOMG003_PRD010_GUIDE2_133.isResizable;
    }
    IsMovable() {
        return VBOMG003_PRD010_GUIDE2_133.isMovable;
    }
}