import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MESSAGE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO041DISPAE_OFF_ENTRY_CONFIRMATION_MESSAGE_MESSAGE',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./MESSAGE.component.css'],
    templateUrl: './MESSAGE.component.html'
})
export class MESSAGE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MESSAGE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "560px";
    private static readonly height: string = "260px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = false;
    private static readonly isMovable: boolean = true;
    X() {
        return MESSAGE.x;
    }
    Y() {
        return MESSAGE.y;
    }
    Width(): string {
        return MESSAGE.width;
    }
    Height(): string {
        return MESSAGE.height;
    }
    IsCenteredToWindow() {
        return MESSAGE.isCenteredToWindow;
    }
    FormName() {
        return MESSAGE.formName;
    }
    ShowTitleBar() {
        return MESSAGE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MESSAGE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MESSAGE.isResizable;
    }
    IsMovable() {
        return MESSAGE.isMovable;
    }
}