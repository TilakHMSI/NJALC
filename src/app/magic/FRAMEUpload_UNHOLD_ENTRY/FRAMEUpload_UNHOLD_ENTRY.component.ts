import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMEUpload_UNHOLD_ENTRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-FRAMEUpload_UNHOLD_ENTRY_FRAMEUpload_UNHOLD_ENTRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FRAMEUpload_UNHOLD_ENTRY.component.html'
})
export class FRAMEUpload_UNHOLD_ENTRY extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FRAMEUpload_UNHOLD_ENTRY";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1050px";
    private static readonly height: string = "800px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return FRAMEUpload_UNHOLD_ENTRY.x;
    }
    Y() {
        return FRAMEUpload_UNHOLD_ENTRY.y;
    }
    Width(): string {
        return FRAMEUpload_UNHOLD_ENTRY.width;
    }
    Height(): string {
        return FRAMEUpload_UNHOLD_ENTRY.height;
    }
    IsCenteredToWindow() {
        return FRAMEUpload_UNHOLD_ENTRY.isCenteredToWindow;
    }
    FormName() {
        return FRAMEUpload_UNHOLD_ENTRY.formName;
    }
    ShowTitleBar() {
        return FRAMEUpload_UNHOLD_ENTRY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FRAMEUpload_UNHOLD_ENTRY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FRAMEUpload_UNHOLD_ENTRY.isResizable;
    }
    IsMovable() {
        return FRAMEUpload_UNHOLD_ENTRY.isMovable;
    }
}