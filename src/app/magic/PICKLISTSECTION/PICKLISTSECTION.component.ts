import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PICKLISTSECTION.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-PICKLISTSECTION_PICKLISTSECTION',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PICKLISTSECTION.component.html'
})
export class PICKLISTSECTION extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PICKLISTSECTION";
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
        return PICKLISTSECTION.x;
    }
    Y() {
        return PICKLISTSECTION.y;
    }
    Width(): string {
        return PICKLISTSECTION.width;
    }
    Height(): string {
        return PICKLISTSECTION.height;
    }
    IsCenteredToWindow() {
        return PICKLISTSECTION.isCenteredToWindow;
    }
    FormName() {
        return PICKLISTSECTION.formName;
    }
    ShowTitleBar() {
        return PICKLISTSECTION.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PICKLISTSECTION.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PICKLISTSECTION.isResizable;
    }
    IsMovable() {
        return PICKLISTSECTION.isMovable;
    }
}