import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRD003_GUIDE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PRD003_GUIDE_PRD003_GUIDE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRD003_GUIDE.component.html'
})
export class PRD003_GUIDE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PRD003_GUIDE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "700px";
    private static readonly height: string = "550px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return PRD003_GUIDE.x;
    }
    Y() {
        return PRD003_GUIDE.y;
    }
    Width(): string {
        return PRD003_GUIDE.width;
    }
    Height(): string {
        return PRD003_GUIDE.height;
    }
    IsCenteredToWindow() {
        return PRD003_GUIDE.isCenteredToWindow;
    }
    FormName() {
        return PRD003_GUIDE.formName;
    }
    ShowTitleBar() {
        return PRD003_GUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PRD003_GUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PRD003_GUIDE.isResizable;
    }
    IsMovable() {
        return PRD003_GUIDE.isMovable;
    }
}