import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FACTORYSTOCKLISTISSUE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB023_LFACTORYFRAMELIST83_FACTORYSTOCKLISTISSUE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './FACTORYSTOCKLISTISSUE.component.html'
})
export class FACTORYSTOCKLISTISSUE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "FACTORYSTOCKLISTISSUE";
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
        return FACTORYSTOCKLISTISSUE.x;
    }
    Y() {
        return FACTORYSTOCKLISTISSUE.y;
    }
    Width(): string {
        return FACTORYSTOCKLISTISSUE.width;
    }
    Height(): string {
        return FACTORYSTOCKLISTISSUE.height;
    }
    IsCenteredToWindow() {
        return FACTORYSTOCKLISTISSUE.isCenteredToWindow;
    }
    FormName() {
        return FACTORYSTOCKLISTISSUE.formName;
    }
    ShowTitleBar() {
        return FACTORYSTOCKLISTISSUE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return FACTORYSTOCKLISTISSUE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return FACTORYSTOCKLISTISSUE.isResizable;
    }
    IsMovable() {
        return FACTORYSTOCKLISTISSUE.isMovable;
    }
}