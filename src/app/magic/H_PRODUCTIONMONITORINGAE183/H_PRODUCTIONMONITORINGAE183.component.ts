import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./H_PRODUCTIONMONITORINGAE183.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-H_PRODUCTIONMONITORINGAE183_H_PRODUCTIONMONITORINGAE183',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './H_PRODUCTIONMONITORINGAE183.component.html'
})
export class H_PRODUCTIONMONITORINGAE183 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "H_PRODUCTIONMONITORINGAE183";
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
        return H_PRODUCTIONMONITORINGAE183.x;
    }
    Y() {
        return H_PRODUCTIONMONITORINGAE183.y;
    }
    Width(): string {
        return H_PRODUCTIONMONITORINGAE183.width;
    }
    Height(): string {
        return H_PRODUCTIONMONITORINGAE183.height;
    }
    IsCenteredToWindow() {
        return H_PRODUCTIONMONITORINGAE183.isCenteredToWindow;
    }
    FormName() {
        return H_PRODUCTIONMONITORINGAE183.formName;
    }
    ShowTitleBar() {
        return H_PRODUCTIONMONITORINGAE183.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return H_PRODUCTIONMONITORINGAE183.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return H_PRODUCTIONMONITORINGAE183.isResizable;
    }
    IsMovable() {
        return H_PRODUCTIONMONITORINGAE183.isMovable;
    }
}