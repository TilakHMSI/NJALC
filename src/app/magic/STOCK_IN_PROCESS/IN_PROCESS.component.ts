import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./IN_PROCESS.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-STOCK_IN_PROCESS_IN_PROCESS',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./IN_PROCESS.component.css'],
    templateUrl: './IN_PROCESS.component.html'
})
export class IN_PROCESS extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "IN_PROCESS";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "700px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return IN_PROCESS.x;
    }
    Y() {
        return IN_PROCESS.y;
    }
    Width(): string {
        return IN_PROCESS.width;
    }
    Height(): string {
        return IN_PROCESS.height;
    }
    IsCenteredToWindow() {
        return IN_PROCESS.isCenteredToWindow;
    }
    FormName() {
        return IN_PROCESS.formName;
    }
    ShowTitleBar() {
        return IN_PROCESS.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return IN_PROCESS.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return IN_PROCESS.isResizable;
    }
    IsMovable() {
        return IN_PROCESS.isMovable;
    }
}