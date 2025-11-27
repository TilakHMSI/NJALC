import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./WarningmessageRed.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-WarningmessageRed_WarningmessageRed',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./WarningmessageRed.component.css'],
    templateUrl: './WarningmessageRed.component.html'
})
export class WarningmessageRed extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Warning";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "500px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return WarningmessageRed.x;
    }
    Y() {
        return WarningmessageRed.y;
    }
    Width(): string {
        return WarningmessageRed.width;
    }
    Height(): string {
        return WarningmessageRed.height;
    }
    IsCenteredToWindow() {
        return WarningmessageRed.isCenteredToWindow;
    }
    FormName() {
        return WarningmessageRed.formName;
    }
    ShowTitleBar() {
        return WarningmessageRed.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return WarningmessageRed.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return WarningmessageRed.isResizable;
    }
    IsMovable() {
        return WarningmessageRed.isMovable;
    }
}