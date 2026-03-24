import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ProductionControlHMSI.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS010_VQMS_MENU_ProductionControlHMSI',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ProductionControlHMSI.component.html'
})
export class ProductionControlHMSI extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ProductionControlHMSI";
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
        return ProductionControlHMSI.x;
    }
    Y() {
        return ProductionControlHMSI.y;
    }
    Width(): string {
        return ProductionControlHMSI.width;
    }
    Height(): string {
        return ProductionControlHMSI.height;
    }
    IsCenteredToWindow() {
        return ProductionControlHMSI.isCenteredToWindow;
    }
    FormName() {
        return ProductionControlHMSI.formName;
    }
    ShowTitleBar() {
        return ProductionControlHMSI.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ProductionControlHMSI.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ProductionControlHMSI.isResizable;
    }
    IsMovable() {
        return ProductionControlHMSI.isMovable;
    }
}