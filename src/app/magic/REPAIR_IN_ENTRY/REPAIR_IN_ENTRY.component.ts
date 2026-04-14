import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./REPAIR_IN_ENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-REPAIR_IN_ENTRY_REPAIR_IN_ENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './REPAIR_IN_ENTRY.component.html'
})
export class REPAIR_IN_ENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "REPAIR_IN_ENTRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1050px";
    private static readonly height: string = "800px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return REPAIR_IN_ENTRY.x;
    }
    Y() {
        return REPAIR_IN_ENTRY.y;
    }
    Width(): string {
        return REPAIR_IN_ENTRY.width;
    }
    Height(): string {
        return REPAIR_IN_ENTRY.height;
    }
    IsCenteredToWindow() {
        return REPAIR_IN_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return REPAIR_IN_ENTRY.formName;
    }
    ShowTitleBar() {
        return REPAIR_IN_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return REPAIR_IN_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return REPAIR_IN_ENTRY.isResizable;
    }
    IsMovable() {
        return REPAIR_IN_ENTRY.isMovable;
    }
}