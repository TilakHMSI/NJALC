import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB040STAMPINGMASTERINFO.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB040STAMPINGMASTERINFO_VPRDB040STAMPINGMASTERINFO',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB040STAMPINGMASTERINFO.component.html'
})
export class VPRDB040STAMPINGMASTERINFO extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB040 STAMPING MASTER INFO";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB040STAMPINGMASTERINFO.x;
    }
    Y() {
        return VPRDB040STAMPINGMASTERINFO.y;
    }
    Width(): string {
        return VPRDB040STAMPINGMASTERINFO.width;
    }
    Height(): string {
        return VPRDB040STAMPINGMASTERINFO.height;
    }
    IsCenteredToWindow() {
        return VPRDB040STAMPINGMASTERINFO.isCenteredToWindow;
    }
    FormName() {
        return VPRDB040STAMPINGMASTERINFO.formName;
    }
    ShowTitleBar() {
        return VPRDB040STAMPINGMASTERINFO.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB040STAMPINGMASTERINFO.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB040STAMPINGMASTERINFO.isResizable;
    }
    IsMovable() {
        return VPRDB040STAMPINGMASTERINFO.isMovable;
    }
}