import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MonthlyPRODUCTIONSCHDmainte.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO181_MONTHLY_SCHD_ENTRY_MonthlyPRODUCTIONSCHDmainte',
    providers: [...magicProviders],
    standalone: false,
    styleUrl: './MonthlyPRODUCTIONSCHDmainte.component.css',
    templateUrl: './MonthlyPRODUCTIONSCHDmainte.component.html'
})
export class MonthlyPRODUCTIONSCHDmainte extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MonthlyPRODUCTIONSCHDmainte";
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
        return MonthlyPRODUCTIONSCHDmainte.x;
    }
    Y() {
        return MonthlyPRODUCTIONSCHDmainte.y;
    }
    Width(): string {
        return MonthlyPRODUCTIONSCHDmainte.width;
    }
    Height(): string {
        return MonthlyPRODUCTIONSCHDmainte.height;
    }
    IsCenteredToWindow() {
        return MonthlyPRODUCTIONSCHDmainte.isCenteredToWindow;
    }
    FormName() {
        return MonthlyPRODUCTIONSCHDmainte.formName;
    }
    ShowTitleBar() {
        return MonthlyPRODUCTIONSCHDmainte.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MonthlyPRODUCTIONSCHDmainte.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MonthlyPRODUCTIONSCHDmainte.isResizable;
    }
    IsMovable() {
        return MonthlyPRODUCTIONSCHDmainte.isMovable;
    }
}