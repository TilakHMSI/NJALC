import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AETargetProductionLine.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-AETargetProdLine231_AETargetProductionLine',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AETargetProductionLine.component.html'
})
export class AETargetProductionLine extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AETargetProductionLine";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "900px";
    private static readonly height: string = "650px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return AETargetProductionLine.x;
    }
    Y() {
        return AETargetProductionLine.y;
    }
    Width(): string {
        return AETargetProductionLine.width;
    }
    Height(): string {
        return AETargetProductionLine.height;
    }
    IsCenteredToWindow() {
        return AETargetProductionLine.isCenteredToWindow;
    }
    FormName() {
        return AETargetProductionLine.formName;
    }
    ShowTitleBar() {
        return AETargetProductionLine.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AETargetProductionLine.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AETargetProductionLine.isResizable;
    }
    IsMovable() {
        return AETargetProductionLine.isMovable;
    }
}