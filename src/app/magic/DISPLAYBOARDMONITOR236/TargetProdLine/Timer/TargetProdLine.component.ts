import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./TargetProdLine.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DISPLAYBOARDMONITOR236_TargetProdLine_Timer_TargetProdLine',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./TargetProdLine.component.css'],
    templateUrl: './TargetProdLine.component.html'
})
export class TargetProdLine extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "TargetProdLine";
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
        return TargetProdLine.x;
    }
    Y() {
        return TargetProdLine.y;
    }
    Width(): string {
        return TargetProdLine.width;
    }
    Height(): string {
        return TargetProdLine.height;
    }
    IsCenteredToWindow() {
        return TargetProdLine.isCenteredToWindow;
    }
    FormName() {
        return TargetProdLine.formName;
    }
    ShowTitleBar() {
        return TargetProdLine.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return TargetProdLine.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return TargetProdLine.isResizable;
    }
    IsMovable() {
        return TargetProdLine.isMovable;
    }
}