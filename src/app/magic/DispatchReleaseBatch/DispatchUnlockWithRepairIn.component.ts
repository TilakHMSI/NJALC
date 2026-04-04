import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DispatchUnlockWithRepairIn.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DispatchReleaseBatch_DispatchUnlockWithRepairIn',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DispatchUnlockWithRepairIn.component.html'
})
export class DispatchUnlockWithRepairIn extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DispatchUnlockWithRepairIn";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1050px";
    private static readonly height: string = "850px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return DispatchUnlockWithRepairIn.x;
    }
    Y() {
        return DispatchUnlockWithRepairIn.y;
    }
    Width(): string {
        return DispatchUnlockWithRepairIn.width;
    }
    Height(): string {
        return DispatchUnlockWithRepairIn.height;
    }
    IsCenteredToWindow() {
        return DispatchUnlockWithRepairIn.isCenteredToWindow;
    }
    FormName() {
        return DispatchUnlockWithRepairIn.formName;
    }
    ShowTitleBar() {
        return DispatchUnlockWithRepairIn.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DispatchUnlockWithRepairIn.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DispatchUnlockWithRepairIn.isResizable;
    }
    IsMovable() {
        return DispatchUnlockWithRepairIn.isMovable;
    }
}