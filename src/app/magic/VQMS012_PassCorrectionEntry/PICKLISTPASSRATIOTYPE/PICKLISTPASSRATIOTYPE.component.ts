import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PICKLISTPASSRATIOTYPE.mg.controls.g";
import { MgDisplayedColumns } from "./PICKLISTPASSRATIOTYPE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS012_PassCorrectionEntry_PICKLISTPASSRATIOTYPE_PICKLISTPASSRATIOTYPE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PICKLISTPASSRATIOTYPE.component.html'
})
export class PICKLISTPASSRATIOTYPE extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PICK LIST PASS RATIO TYPE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return PICKLISTPASSRATIOTYPE.x;
    }
    Y() {
        return PICKLISTPASSRATIOTYPE.y;
    }
    Width(): string {
        return PICKLISTPASSRATIOTYPE.width;
    }
    Height(): string {
        return PICKLISTPASSRATIOTYPE.height;
    }
    IsCenteredToWindow() {
        return PICKLISTPASSRATIOTYPE.isCenteredToWindow;
    }
    FormName() {
        return PICKLISTPASSRATIOTYPE.formName;
    }
    ShowTitleBar() {
        return PICKLISTPASSRATIOTYPE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PICKLISTPASSRATIOTYPE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PICKLISTPASSRATIOTYPE.isResizable;
    }
    IsMovable() {
        return PICKLISTPASSRATIOTYPE.isMovable;
    }
    override displayedColumns = this.mgdp;
}