import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB034ENGINECARDISSUE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB034ENGPRINTHSC_VPRDB034ENGINECARDISSUE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB034ENGINECARDISSUE.component.html'
})
export class VPRDB034ENGINECARDISSUE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB034ENGINECARDISSUE";
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
        return VPRDB034ENGINECARDISSUE.x;
    }
    Y() {
        return VPRDB034ENGINECARDISSUE.y;
    }
    Width(): string {
        return VPRDB034ENGINECARDISSUE.width;
    }
    Height(): string {
        return VPRDB034ENGINECARDISSUE.height;
    }
    IsCenteredToWindow() {
        return VPRDB034ENGINECARDISSUE.isCenteredToWindow;
    }
    FormName() {
        return VPRDB034ENGINECARDISSUE.formName;
    }
    ShowTitleBar() {
        return VPRDB034ENGINECARDISSUE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB034ENGINECARDISSUE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB034ENGINECARDISSUE.isResizable;
    }
    IsMovable() {
        return VPRDB034ENGINECARDISSUE.isMovable;
    }
}