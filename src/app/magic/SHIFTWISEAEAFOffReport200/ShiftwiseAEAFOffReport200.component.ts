import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ShiftwiseAEAFOffReport200.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SHIFTWISEAEAFOffReport200_ShiftwiseAEAFOffReport200',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ShiftwiseAEAFOffReport200.component.html'
})
export class ShiftwiseAEAFOffReport200 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ShiftwiseAEAFOffReport200";
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
        return ShiftwiseAEAFOffReport200.x;
    }
    Y() {
        return ShiftwiseAEAFOffReport200.y;
    }
    Width(): string {
        return ShiftwiseAEAFOffReport200.width;
    }
    Height(): string {
        return ShiftwiseAEAFOffReport200.height;
    }
    IsCenteredToWindow() {
        return ShiftwiseAEAFOffReport200.isCenteredToWindow;
    }
    FormName() {
        return ShiftwiseAEAFOffReport200.formName;
    }
    ShowTitleBar() {
        return ShiftwiseAEAFOffReport200.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ShiftwiseAEAFOffReport200.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ShiftwiseAEAFOffReport200.isResizable;
    }
    IsMovable() {
        return ShiftwiseAEAFOffReport200.isMovable;
    }
}