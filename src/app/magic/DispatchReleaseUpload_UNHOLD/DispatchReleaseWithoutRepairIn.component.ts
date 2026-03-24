import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DispatchReleaseWithoutRepairIn.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DispatchReleaseUpload_UNHOLD_DispatchReleaseWithoutRepairIn',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './DispatchReleaseWithoutRepairIn.component.html'
})
export class DispatchReleaseWithoutRepairIn extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "DispatchReleaseWithoutRepairIn";
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
        return DispatchReleaseWithoutRepairIn.x;
    }
    Y() {
        return DispatchReleaseWithoutRepairIn.y;
    }
    Width(): string {
        return DispatchReleaseWithoutRepairIn.width;
    }
    Height(): string {
        return DispatchReleaseWithoutRepairIn.height;
    }
    IsCenteredToWindow() {
        return DispatchReleaseWithoutRepairIn.isCenteredToWindow;
    }
    FormName() {
        return DispatchReleaseWithoutRepairIn.formName;
    }
    ShowTitleBar() {
        return DispatchReleaseWithoutRepairIn.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return DispatchReleaseWithoutRepairIn.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return DispatchReleaseWithoutRepairIn.isResizable;
    }
    IsMovable() {
        return DispatchReleaseWithoutRepairIn.isMovable;
    }
}