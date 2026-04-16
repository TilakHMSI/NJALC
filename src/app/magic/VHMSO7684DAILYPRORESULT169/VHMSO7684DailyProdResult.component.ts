import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VHMSO7684DailyProdResult.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSO7684DAILYPRORESULT169_VHMSO7684DailyProdResult',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VHMSO7684DailyProdResult.component.html'
})
export class VHMSO7684DailyProdResult extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VHMSO7684DailyProdResult";
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
        return VHMSO7684DailyProdResult.x;
    }
    Y() {
        return VHMSO7684DailyProdResult.y;
    }
    Width(): string {
        return VHMSO7684DailyProdResult.width;
    }
    Height(): string {
        return VHMSO7684DailyProdResult.height;
    }
    IsCenteredToWindow() {
        return VHMSO7684DailyProdResult.isCenteredToWindow;
    }
    FormName() {
        return VHMSO7684DailyProdResult.formName;
    }
    ShowTitleBar() {
        return VHMSO7684DailyProdResult.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VHMSO7684DailyProdResult.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VHMSO7684DailyProdResult.isResizable;
    }
    IsMovable() {
        return VHMSO7684DailyProdResult.isMovable;
    }
}