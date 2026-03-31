import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DispatchStop.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DispatchStop_DispatchStop',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DispatchStop.component.html'
})
export class DispatchStop extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DispatchStop";
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
        return DispatchStop.x;
    }
    Y() {
        return DispatchStop.y;
    }
    Width(): string {
        return DispatchStop.width;
    }
    Height(): string {
        return DispatchStop.height;
    }
    IsCenteredToWindow() {
        return DispatchStop.isCenteredToWindow;
    }
    FormName() {
        return DispatchStop.formName;
    }
    ShowTitleBar() {
        return DispatchStop.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DispatchStop.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DispatchStop.isResizable;
    }
    IsMovable() {
        return DispatchStop.isMovable;
    }
}