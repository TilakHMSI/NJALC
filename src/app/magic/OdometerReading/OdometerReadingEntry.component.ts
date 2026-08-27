import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./OdometerReadingEntry.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-OdometerReading_OdometerReadingEntry',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './OdometerReadingEntry.component.html'
})
export class OdometerReadingEntry extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "OdometerReadingEntry";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return OdometerReadingEntry.x;
    }
    Y() {
        return OdometerReadingEntry.y;
    }
    Width(): string {
        return OdometerReadingEntry.width;
    }
    Height(): string {
        return OdometerReadingEntry.height;
    }
    IsCenteredToWindow() {
        return OdometerReadingEntry.isCenteredToWindow;
    }
    FormName() {
        return OdometerReadingEntry.formName;
    }
    ShowTitleBar() {
        return OdometerReadingEntry.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return OdometerReadingEntry.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return OdometerReadingEntry.isResizable;
    }
    IsMovable() {
        return OdometerReadingEntry.isMovable;
    }
}