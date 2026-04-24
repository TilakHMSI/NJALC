import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB017VLMONTHPRODRESHVN78.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB017VLMONTHPRODRESHVN78_VPRDB017VLMONTHPRODRESHVN78',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB017VLMONTHPRODRESHVN78.component.html'
})
export class VPRDB017VLMONTHPRODRESHVN78 extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB017VLMONTHPRODRESHVN78";
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
        return VPRDB017VLMONTHPRODRESHVN78.x;
    }
    Y() {
        return VPRDB017VLMONTHPRODRESHVN78.y;
    }
    Width(): string {
        return VPRDB017VLMONTHPRODRESHVN78.width;
    }
    Height(): string {
        return VPRDB017VLMONTHPRODRESHVN78.height;
    }
    IsCenteredToWindow() {
        return VPRDB017VLMONTHPRODRESHVN78.isCenteredToWindow;
    }
    FormName() {
        return VPRDB017VLMONTHPRODRESHVN78.formName;
    }
    ShowTitleBar() {
        return VPRDB017VLMONTHPRODRESHVN78.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB017VLMONTHPRODRESHVN78.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB017VLMONTHPRODRESHVN78.isResizable;
    }
    IsMovable() {
        return VPRDB017VLMONTHPRODRESHVN78.isMovable;
    }
}