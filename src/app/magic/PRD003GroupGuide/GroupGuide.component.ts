import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GroupGuide.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PRD003GroupGuide_GroupGuide',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './GroupGuide.component.html'
})
export class GroupGuide extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GroupGuide";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return GroupGuide.x;
    }
    Y() {
        return GroupGuide.y;
    }
    Width(): string {
        return GroupGuide.width;
    }
    Height(): string {
        return GroupGuide.height;
    }
    IsCenteredToWindow() {
        return GroupGuide.isCenteredToWindow;
    }
    FormName() {
        return GroupGuide.formName;
    }
    ShowTitleBar() {
        return GroupGuide.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GroupGuide.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GroupGuide.isResizable;
    }
    IsMovable() {
        return GroupGuide.isMovable;
    }
}