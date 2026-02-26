import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./EV_MODEL_MASTER.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-EV_MODEL_MASTER_EV_MODEL_MASTER',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./EV_MODEL_MASTER.component.css'],
    templateUrl: './EV_MODEL_MASTER.component.html'
})
export class EV_MODEL_MASTER extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "EV_MODEL_MASTER";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "625px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return EV_MODEL_MASTER.x;
    }
    Y() {
        return EV_MODEL_MASTER.y;
    }
    Width(): string {
        return EV_MODEL_MASTER.width;
    }
    Height(): string {
        return EV_MODEL_MASTER.height;
    }
    IsCenteredToWindow() {
        return EV_MODEL_MASTER.isCenteredToWindow;
    }
    FormName() {
        return EV_MODEL_MASTER.formName;
    }
    ShowTitleBar() {
        return EV_MODEL_MASTER.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return EV_MODEL_MASTER.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return EV_MODEL_MASTER.isResizable;
    }
    IsMovable() {
        return EV_MODEL_MASTER.isMovable;
    }
}