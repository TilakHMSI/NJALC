import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB065HPEFIVSREPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB065FIVSRE_PRINTHPE106_VPRDB065HPEFIVSREPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB065HPEFIVSREPRINT.component.html'
})
export class VPRDB065HPEFIVSREPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB065HPEFIVSREPRINT";
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
        return VPRDB065HPEFIVSREPRINT.x;
    }
    Y() {
        return VPRDB065HPEFIVSREPRINT.y;
    }
    Width(): string {
        return VPRDB065HPEFIVSREPRINT.width;
    }
    Height(): string {
        return VPRDB065HPEFIVSREPRINT.height;
    }
    IsCenteredToWindow() {
        return VPRDB065HPEFIVSREPRINT.isCenteredToWindow;
    }
    FormName() {
        return VPRDB065HPEFIVSREPRINT.formName;
    }
    ShowTitleBar() {
        return VPRDB065HPEFIVSREPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB065HPEFIVSREPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB065HPEFIVSREPRINT.isResizable;
    }
    IsMovable() {
        return VPRDB065HPEFIVSREPRINT.isMovable;
    }
}