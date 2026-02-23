import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./WarningmessageGrey.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-WarningmessageGrey_WarningmessageGrey',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./WarningmessageGrey.component.css'],
    templateUrl: './WarningmessageGrey.component.html'
})
export class WarningmessageGrey extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Warning";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "450px";
    private static readonly height: string = "230px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return WarningmessageGrey.x;
    }
    Y() {
        return WarningmessageGrey.y;
    }
    Width(): string {
        return WarningmessageGrey.width;
    }
    Height(): string {
        return WarningmessageGrey.height;
    }
    IsCenteredToWindow() {
        return WarningmessageGrey.isCenteredToWindow;
    }
    FormName() {
        return WarningmessageGrey.formName;
    }
    ShowTitleBar() {
        return WarningmessageGrey.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return WarningmessageGrey.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return WarningmessageGrey.isResizable;
    }
    IsMovable() {
        return WarningmessageGrey.isMovable;
    }
}