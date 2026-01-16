import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AF_TEST.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-AF_TEST_AF_TEST',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AF_TEST.component.html'
})
export class AF_TEST extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "AF VISION TEST";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "800px";
    private static readonly height: string = "600px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return AF_TEST.x;
    }
    Y() {
        return AF_TEST.y;
    }
    Width(): string {
        return AF_TEST.width;
    }
    Height(): string {
        return AF_TEST.height;
    }
    IsCenteredToWindow() {
        return AF_TEST.isCenteredToWindow;
    }
    FormName() {
        return AF_TEST.formName;
    }
    ShowTitleBar() {
        return AF_TEST.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return AF_TEST.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return AF_TEST.isResizable;
    }
    IsMovable() {
        return AF_TEST.isMovable;
    }
}