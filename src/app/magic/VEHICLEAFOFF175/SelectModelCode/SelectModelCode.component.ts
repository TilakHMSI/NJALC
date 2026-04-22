import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectModelCode.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VEHICLEAFOFF175_SelectModelCode_SelectModelCode',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './SelectModelCode.component.html'
})
export class SelectModelCode extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectModelCode";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return SelectModelCode.x;
    }
    Y() {
        return SelectModelCode.y;
    }
    Width(): string {
        return SelectModelCode.width;
    }
    Height(): string {
        return SelectModelCode.height;
    }
    IsCenteredToWindow() {
        return SelectModelCode.isCenteredToWindow;
    }
    FormName() {
        return SelectModelCode.formName;
    }
    ShowTitleBar() {
        return SelectModelCode.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectModelCode.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return SelectModelCode.isResizable;
    }
    IsMovable() {
        return SelectModelCode.isMovable;
    }
}