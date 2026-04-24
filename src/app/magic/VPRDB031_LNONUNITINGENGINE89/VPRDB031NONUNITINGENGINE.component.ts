import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB031NONUNITINGENGINE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB031_LNONUNITINGENGINE89_VPRDB031NONUNITINGENGINE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB031NONUNITINGENGINE.component.html'
})
export class VPRDB031NONUNITINGENGINE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB031NONUNITINGENGINE";
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
        return VPRDB031NONUNITINGENGINE.x;
    }
    Y() {
        return VPRDB031NONUNITINGENGINE.y;
    }
    Width(): string {
        return VPRDB031NONUNITINGENGINE.width;
    }
    Height(): string {
        return VPRDB031NONUNITINGENGINE.height;
    }
    IsCenteredToWindow() {
        return VPRDB031NONUNITINGENGINE.isCenteredToWindow;
    }
    FormName() {
        return VPRDB031NONUNITINGENGINE.formName;
    }
    ShowTitleBar() {
        return VPRDB031NONUNITINGENGINE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB031NONUNITINGENGINE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB031NONUNITINGENGINE.isResizable;
    }
    IsMovable() {
        return VPRDB031NONUNITINGENGINE.isMovable;
    }
}