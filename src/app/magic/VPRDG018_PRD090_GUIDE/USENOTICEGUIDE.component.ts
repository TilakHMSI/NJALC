import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./USENOTICEGUIDE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDG018_PRD090_GUIDE_USENOTICEGUIDE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './USENOTICEGUIDE.component.html'
})
export class USENOTICEGUIDE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "USENOTICEGUIDE";
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
        return USENOTICEGUIDE.x;
    }
    Y() {
        return USENOTICEGUIDE.y;
    }
    Width(): string {
        return USENOTICEGUIDE.width;
    }
    Height(): string {
        return USENOTICEGUIDE.height;
    }
    IsCenteredToWindow() {
        return USENOTICEGUIDE.isCenteredToWindow;
    }
    FormName() {
        return USENOTICEGUIDE.formName;
    }
    ShowTitleBar() {
        return USENOTICEGUIDE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return USENOTICEGUIDE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return USENOTICEGUIDE.isResizable;
    }
    IsMovable() {
        return USENOTICEGUIDE.isMovable;
    }
}