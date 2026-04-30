import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./Reprocess.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VEHICLEAEOFFNEWREADY215_RoutetoProcess_Reprocess',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './Reprocess.component.html'
})
export class Reprocess extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Reprocess";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "400px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return Reprocess.x;
    }
    Y() {
        return Reprocess.y;
    }
    Width(): string {
        return Reprocess.width;
    }
    Height(): string {
        return Reprocess.height;
    }
    IsCenteredToWindow() {
        return Reprocess.isCenteredToWindow;
    }
    FormName() {
        return Reprocess.formName;
    }
    ShowTitleBar() {
        return Reprocess.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return Reprocess.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return Reprocess.isResizable;
    }
    IsMovable() {
        return Reprocess.isMovable;
    }
}